const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

const upload = multer({ storage: multer.memoryStorage() });

app.post("/post", upload.single("image"), async (req, res) => {
    try {
        // Check if file exists
        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded"
            });
        }

        console.log(req.body);
        console.log(req.file);

        const result = await uploadFile(req.file.buffer);

        console.log(result);
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })

        res.status(200).json({
            message: "Post created successfully",
            post
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Upload failed",
            error: error.message
        });
    }
});

app.get("/post", async (req, res)=>{
    const post = await postModel.find();

    res.status(201).json({
        message: "Post fetched successfully",
        post
    })
})

module.exports = app;
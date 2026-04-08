const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function registerUser(req, res) {
    const {username, password, email, role="user"} = req.body;

    const IsUserAlreadyExists = await userModel.findOne(
       { $or: [{username},
                {email}]
       }
    )

    if(IsUserAlreadyExists){
        return res.status(409).json({
            message: "user already exists"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username, email, password:hash, role
    })

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(200).json({
        // id: _id,
        username: user.username,
        password: user.password,
        user: user.role,
        email: user.email
    })
}

module.exports= { registerUser }


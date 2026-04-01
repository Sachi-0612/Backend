const ImageKit = require('@imagekit/nodejs');

const imageKit = new ImageKit({
    // publicKey: "public_JISlPfda4F4MezLJetb/RQaeucw=",
    privateKey: process.env.IMAGEKIT_PRIVATEKEY,
    // urlEndpoint: "https://ik.imagekit.io/wv3yhbxdb"
});

async function uploadFile(buffer) {
    try {
        const result = await imageKit.files.upload({
            file: buffer.toString('base64'),
            fileName: "image.jpg"
        });

        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = uploadFile;
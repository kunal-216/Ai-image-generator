import Post from "../mongodb/models/post.js"
import cloudinary from "cloudinary";
import * as dotenv from "dotenv"

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json({success:true, data:posts})
    } catch (error) {
        console.log(error)
        res.status(200).json({success: false, message: error})
    }
}

const createPost = async (req,res) => {
    try {
        const {name, prompt, photo} = req.body
        if(!name || !photo || !prompt){
            return res.status(400).json({success: false, message: "Please fill all the fields"})
        }
        const photoUrl = await cloudinary.uploader.upload(photo)
        const newPost = await Post.create({
            name,
            prompt,
            image: photoUrl.secure_url
        })
        res.status(201).json({success:true, data:newPost})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:error})
    }
}

export {getAllPosts, createPost}
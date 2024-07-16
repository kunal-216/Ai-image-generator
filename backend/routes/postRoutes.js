import express from "express"
import { getAllPosts, createPost } from "../controller/postsController.js"

const router = express.Router()

// get all posts Route
router.get("/", getAllPosts)

// create posts Route
router.post("/",createPost)

export default router
import express from "express"
import * as dotenv from "dotenv"
import { getPhotos } from "../controller/photoController.js"
dotenv.config()

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello from VisionaryAi")
})

router.get('/photos', getPhotos);

export default router
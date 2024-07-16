import { createClient } from "pexels"

const client = createClient(process.env.PEXELS_API_KEY)

const getPhotos = async (req, res) => {
    const query = req.query.query;
    try {
        const response = await client.photos.search({ query, per_page: 1 });
        const photo = response.photos[0];
        
        if (photo) {
            const imageUrl = photo.src.portrait;
            res.status(200).json({ success:true, imageUrl });
        } else {
            res.status(404).json({ success:false, error: "No photo found" });
        }

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

export {getPhotos}
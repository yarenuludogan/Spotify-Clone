import {Song} from "../models/songModel.js";
import {Album} from "../models/albumModel.js";
import cloudinary from "../lib/cloudinary.js";


const uploadToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.temFilePath, {
            resource_type: "auto",

        })
        return result.secure_url
} catch (error){
    console.log("Error in uploadToCloudinary", error);
    throw new Error ("Error uploading to cloudinary");

}
}



export const createSong = async (req, res, next) => {
    try{
        if(!req.files || !req.files.audioFile || !req.files.imageFile){
            return res.status(400).json({message:"Please upload all files"});
        }

        const {title, artist, albumId, duration}= req.body
        const audioFile = req.files.audioFile;
        const imageFile = req.files.imageFile;

        const audioUrl = await uploadToCloudinary(audioFile);
        const imageUrl = await uploadToCloudinary(imageFile);

        const song = new Song({
            title,
            artist,
            audioUrl,
            imageUrl,
            duration,
            albumId: albumId || null
        })

        await song.save();
        if(albumId){
            await Album.findByIdAndUpdate(albumId, {$push:{songs:song_id},})
        }
        res.status(201).json(song)


    }catch (error){
        console.log("Error in createSong", error);
        res.status(500).json({ message: "Internal server error", error});
        next( error);
    }
   
};

export const deleteSong = async (req, res, next) => {
    try{
        const { id } = req.params

        const song= await Song.findById(id)

        if (song.albumId){
            await Album.findByIdAndUpdate(song.albumId, {
                $pull: {songs: song._id}
            })
        }
        await Song.findByIdAndDelete(id)
        res.status(200).json({ message: "Song deleted successfully"});
    } catch(error)
    {
      console.log("Error in deleteSong", error)  
      next(error);
    }
    

};

export const createAlbum = async (req, res, next) => {
    try{
      const { title, artist, releaseYear}= req.body
      const {imageFile} = req.files

      const album = new Album ({
        title, artist, imageUrl, releaseYear
      })

      await album.save()

      res.status(201).json(album)
    } catch(error){
        console.log("Error in createAlbum" , error);
        next(error);

    }
};

export const deleteAlbum = async (req, res, next) => {

    try{ 
        const {id} = req.params;
        await Song.deleteMany({albumId: id});
        await Album.findByIdAndDelete(id);
        res.status(200).json({ message:"Album deleted successfully"});

    }catch(error){
        console.log("Error in deleteAlbum", error);
        next(error);

    }
};

export const checkAdmin = async (req, res, next) => {
        res.status(200).json({ admin: true});
};
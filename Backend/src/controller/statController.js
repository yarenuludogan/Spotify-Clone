import { Album } from "../models/albumModel.js";
import { User } from "../models/userModel.js";
import { Song } from "../models/songModel.js";

export const getStats = async ( req, res, next) => {
    try{
      const [totalSongs, totalAlbums, totalUsers, unipueArtist] = await Promise.all([
        Song.countDocuments(),
        User.countDocuments(),
        Album.countDocuments(),

        Song.aggregate([
            { $unionWith:{
            coll:"albums",
            pipeline:[],},
        },
        {
            $group:{
                _id:"$artist",
            },
        },
        {
            $count: "count",
        },
        ]),
      ]);

res.status(200).json({
    totalAlbums,
    totalSongs,
    totalUsers,
    totalArtist: unipueArtist[0]?.count || 0
})
 } catch(error){
        next(error);
    }
}
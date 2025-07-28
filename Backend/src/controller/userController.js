import { User } from "../models/userModel.js";
 

export const getAllUsers = async (req, res, next) => {
    try {
        const currrentUserId = req.auth.userId;
        const users = await User.find({ clerkId: {$ne: currentUserId }});
        res.status(200).json(users);
    
    }
    catch( error){
        next(error);
    }

}
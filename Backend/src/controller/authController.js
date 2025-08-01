import { User } from "../models/userModel.js";
export const authCallback = async (req, res, next) => {
  try{
    const {id, firstName, lastName, imageUrl}= req.body;

    const user = await User.findOne({clerkId: id});

    if(!user){
        await User.create({
            clerkId: id,
            fullName: `${firstName} ${lastName}`,
            imageUrl
        })
    } 
    res.status(200).json({success:true})

  } catch (error){
    console.log("Error in auth callback", error);
    next(error) }
};
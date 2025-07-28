import { Router } from 'express';
import { User } from "../models/userModel.js"
import { authCallback } from '../controller/authController.js';

const router = Router();

router.post("/callback", authCallback
);

export default router;
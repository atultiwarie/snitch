import {Router} from 'express';
const router = Router();
import { loginUser, registerUser } from '../controllers/auth.controller.js';
import { validateRegisterUser,validateLoginUser } from "../validator/auth.validator.js";

router.post('/register', validateRegisterUser, registerUser);

router.post('/login', validateLoginUser, loginUser);


export default router;
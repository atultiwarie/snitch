import {Router} from 'express';
const router = Router();
import { loginUser, registerUser } from '../controllers/auth.controller.js';
import { validateRegisterUser } from "../validator/auth.validator.js";

router.post('/register', validateRegisterUser, registerUser);

router.post('/login', loginUser);


export default router;
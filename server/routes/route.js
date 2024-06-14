import express from 'express';

import { addUser, getUsers } from '../controller/userController.js';



const router = express.Router();

router.post('/add', addUser);
router.get('/all', getUsers)


export default router;
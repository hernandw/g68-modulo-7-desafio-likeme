import express from 'express';
import { home, addPost } from '../controllers/controller.js';
const router = express.Router()

router.get('/', home)

router.post('/post', addPost)

router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router
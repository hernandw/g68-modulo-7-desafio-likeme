import express from 'express';
import { home, addPost, mostrarPosts, addLike } from '../controllers/controller.js';
const router = express.Router()

router.get('/', home)

router.post('/post', addPost)

router.get('/posts', mostrarPosts)

router.put('/post', addLike)

router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router
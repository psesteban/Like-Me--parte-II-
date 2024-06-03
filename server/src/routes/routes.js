import { Router } from 'express'
import * as controller from '../controllers/likes.js'


const router = Router()
router.route('/posts').get(controller.getPosts).post(controller.postPost)
router.route('/posts/:id').delete(controller.deletePost)
router.route('/posts/like/:id').put(controller.putPost)

export default router

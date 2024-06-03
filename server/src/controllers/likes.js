import * as sql from '../models/posts.js'

// GET /todos
export const getPosts = (req, res) => sql.findAll()
.then((posts) => res.status(200).json(posts))
.catch ((error) => res.status(500).json({status: false, code: 500, message: error})
)

export const postPost = (req, res) => sql
.createPost(req.body.titulo, req.body.img, req.body.descripcion)
.then((result) => res.status(200).json({status: true, code: 200, message: result}))
.catch ((error) => res.status(500).json({status: false, code: 500, message: error})
)

export const putPost = (req, res) => sql
.editPost(req.params.id)
.then((result) => res.status(200).json({status: true, code: 200, message: result}))
.catch ((error) => res.status(500).json({status: false, code: 500, message: error})
)

export const deletePost = (req, res) => sql
.deletePost(req.params.id)
.then((result) => res.status(200).json({status: true, code: 200, message: result}))
.catch ((error) => res.status(500).json({status: false, code: 500, message: error})
)
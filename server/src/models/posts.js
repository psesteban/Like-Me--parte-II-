import data from '../database/config.js'

export const findAll = async () => await data('SELECT * FROM posts;')
export const createPost = async (titulo, img, descripcion) => {
  const likes = 0
  await data('INSERT INTO posts (id, titulo, img, descripcion, likes) VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *;', [titulo, img, descripcion, likes])
}
export const editPost = async (id) => {
  await data('UPDATE posts SET likes = likes + 1 WHERE id = $1;', [id]);
  }
export const deletePost = async (id) => {
    await data('DELETE FROM posts WHERE id = $1;', [id])
    }
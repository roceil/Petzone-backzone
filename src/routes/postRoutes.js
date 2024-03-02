// src/routes/postRoutes.js
const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

// 取得所有貼文
router.get('/posts', postController.getAllPosts)

// 取得貼文 By ID
router.get('/post/:id', postController.getPostById)

// 取得所有貼文 By User ID
router.get('/posts/user/:userId', postController.getPostsByUserId)

// 新增貼文
router.post('/post', postController.createPost)

// 編輯貼文 By ID
router.put('/post/:id', postController.updatePostById)

// 刪除所有貼文
router.delete('/posts', postController.deleteAllPosts)

// 刪除貼文 By ID
router.delete('/post/:id', postController.deletePostById)

// 點讚貼文
router.post('/post/:id/like', postController.createPostLike)

// 更新貼文點讚
router.put('/post/:id/like', postController.updatePostLike)

module.exports = router

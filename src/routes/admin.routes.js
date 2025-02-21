const path = require('node:path')
const express = require('express');
const fileUpload = require('express-fileupload')

const { deleteHandler, getHandler, postHandler, putHandler } = require('../utils/handlers');
const { deleteImage, uploadImage } = require('../controllers/admin.controller');

const { hash } = require('argon2')

const router = express.Router();

router.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
  useTempFiles : true,
  tempFileDir : path.resolve('tmp')
}))

//Users
router.get('/users/:id?', getHandler('User'))
router.post('/users', postHandler('User', {
  onBeforeUpdate: hashPassword
}))

router.put('/users/:id?', putHandler('User', {
  onBeforeUpdate: hashPassword
}))

async function hashPassword({ data }) {
  if (data.password) {
    const h = await hash(data.password)
    data.password = h
  }
  return data
}


//Pages
router.get('/pages/:id?', getHandler('Page'))
router.post('/pages', postHandler('Page'))
router.put('/pages/:id?', putHandler('Page'))

//Books
router.get('/books/:id?', getHandler('Book'))
router.post('/books', postHandler('Book'))
router.put('/books/:id?', putHandler('Book'))
router.delete('/books/:id?', deleteHandler('Book'))


//Events
router.get('/events/:id?', getHandler('Event'))
router.post('/events', postHandler('Event'))
router.put('/events/:id?', putHandler('Event'))
router.delete('/events/:id?', deleteHandler('Book'))


//Images
router.get('/gallery/:id?', getHandler('Image'))
router.post('/gallery', uploadImage)
router.delete('/gallery/:id', deleteImage)


//Settings
router.get('/settings', getHandler('Setting'))
router.post('/settings', postHandler('Setting'))
router.put('/settings/:id?', putHandler('Setting'))
//router.delete('/settings/:id?', /* deleteHandler('Book') */)





module.exports = router;
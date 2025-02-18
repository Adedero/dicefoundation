const express = require('express');
const router = express.Router();
const env = require('../utils/env')

const API = env.get('API')
const socials = require('../data/social-media-links')
const axios = require('axios')

router.get('/', async (req, res) => {
  //const { data } = await axios.get(`${API}/home-page`)
   //  console.log(data)
   res.render('index', {
     socials
   })
 })

 router.get('/about', (req, res) => {
   res.render('about', {
     socials
   })
 })

 router.get('/books', (req, res) => {
   res.render('books', {
     socials
   })
 })

 router.get('/books/:slug', (req, res) => {
   res.render('book', {
     socials
   })
 })

 router.get('/events', (req, res) => {
   res.render('events', {
     socials
   })
 })

 router.get('/contact', (req, res) => {
   res.render('contact', {
     socials
   })
 })

 /* router.get('/admin', (req, res) => {
   const adminUrl = env.get('ADMIN_URL')
   if (adminUrl) {
     res.redirect(adminUrl)
     return
   }
   res.render('not-found')
 }) */

module.exports = router
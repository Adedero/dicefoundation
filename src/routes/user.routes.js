const express = require('express');
const router = express.Router();
const env = require('../utils/env')

const { db } = require('../config/db.config')
const Setting = require('../models/setting.model');
const { getIcon, formatEventDates, getCurrencySymbol } = require('../utils/helpers');
const { Op } = require('sequelize')


router.use(async(req, res, next) => {
  try {
    const settings = await Setting.findOne({ raw: true })
    const socials = settings.socialMediaLinks?.map((link) => {
      const label = link.label
      const href = link.link
      const icon = getIcon(link.label)
      return { label, href, icon }
    })
    res.locals.socials = socials
    res.locals.settings = settings
    next()
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const [homePage, featuredBooks, featuredEvents] = await Promise.all([
      db.Page.findOne({ where: { title: 'home' } }),
      db.Book.findAll({ where: { featured: true }, raw: true }),
      db.Event.findAll({ where: { featured: true }, raw: true })
    ])

    /* if (!homePage) {
      return res.render('not-found')
    } */
  
    const formattedEvents = featuredEvents.map((event) => {
      return {
        ...event,
        ...(formatEventDates(event))
      }
    })
  
    const data = {
      homePage,
      featuredBooks,
      featuredEvents: formattedEvents
    }
    res.locals.pageData = data
  
    res.render('index')
  } catch (error) {
    next(error)
  }
 })


router.get('/about', async (req, res, next) => {
  try {
    const aboutPage = await db.Page.findOne({ where: { title: 'about' }, raw: true })
    res.locals.pageData = aboutPage
    res.render('about')
  } catch (error) {
    next(error)
  }
})

router.get('/books', async (req, res, next) => {
  const { search } = req.query
  const searchQuery = search ? search.toString() : ''
  try {
    const books = await db.Book.findAll({ where: { title: { [Op.iLike]: `%${searchQuery}%` } }, raw: true })

    res.locals.pageData = {
      books,
      query: searchQuery
    }
    res.render('books')
  } catch (error) {
    next(error)
  }
})

router.get('/books/:slug', async (req, res, next) => {
  const { slug } = req.params
  try {
    const book = await db.Book.findOne({ where: { slug }, raw: true })
    if (!book) {
      return res.render('not-found')
    }
    book.currencySymbol = getCurrencySymbol(book.currency)

    res.locals.pageData = {
      book
    }
    res.render('book')
  } catch (error) {
    next(error)
  }
})

 router.get('/events', async (req, res, next) => {
  const { search } = req.query
  const searchQuery = search ? search.toString() : ''
  try {
    const events = await db.Event.findAll({ where: { title: { [Op.iLike]: `%${searchQuery}%` } }, raw: true })

    const formattedEvents = events.map((event) => {
      return {
        ...event,
        ...(formatEventDates(event))
      }
    })

    res.locals.pageData = {
      events: formattedEvents,
      query: searchQuery
    }
    res.render('events')
  } catch (error) {
    next(error)
  }
})

router.get('/events/:slug', async (req, res, next) => {
  const { slug } = req.params
  try {
    const event = await db.Event.findOne({ where: { slug }, raw: true })
    if (!event) {
      return res.render('not-found')
    }
    const formattedEvent =  {
      ...event,
      ...(formatEventDates(event)),
      currencySymbol: getCurrencySymbol(event.currency)
    }

    res.locals.pageData = {
      event: formattedEvent
    }
    res.render('event')
  } catch (error) {
    next(error)
  }
})

router.get('/contact', (req, res) => {
  res.render('contact')
})

module.exports = router
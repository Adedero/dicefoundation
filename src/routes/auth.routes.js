const express = require('express');
const { hash, verify } = require('argon2');
const User = require('../models/user.model');
const { HTTPException, objectFromFields } = require('../utils/helpers');
const jwt = require('jsonwebtoken');
const env = require('../utils/env');

const router = express.Router();

//LOG IN
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new HTTPException(400, 'Email and password are required')
  }
  if (password.length < 6) {
    res.status(400).json({ message: 'Password must be at least 6 characters' })
    return
  }

  try {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      throw new HTTPException(400, 'Incorrect email or password')
    }

    const isPasswordCorrect = await verify(user.password, password)

    if (!isPasswordCorrect) {
      throw new HTTPException(400, 'Incorrect email or password')
    }

    const jwtPayload = { id: user.id, role: user.role }
    const token = jwt.sign(jwtPayload, env.get('SECRET'), { expiresIn: '3h' })
    const responsePayload = { ...objectFromFields(user, ['id', 'name', 'email', 'image']), token }
    return res.status(200).json(responsePayload)
  } catch (error) {
    next(error)
  }
})

// REGISTER
router.post('/register', async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email ||!password) {
    throw new HTTPException(400, 'Name, email and password are required')
  }

  try {
    const adminExists = await User.findOne({})

    if (adminExists) {
      throw new HTTPException(403, 'You are not allowed to register')
    }

    const existingUser = await User.findOne({ where: { email }})

    if (existingUser) {
      throw new HTTPException(400, 'An account with this email already exists.')
    }

    const hashedPassword = await hash(password)

    const user = User.build({ name, email, password: hashedPassword })
    await user.save()
    return res.status(201).json({ message: 'User created successfully' })

  } catch (error) {
    next(error)
  }
})


router.put('/register', async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email ||!password) {
    throw new HTTPException(400, 'Name, email and password are required')
  }

  try {
    const existingUser = await User.findOne({ where: { email }})

    if (existingUser) {
      throw new HTTPException(400, 'An account with this email already exists.')
    }

    const hashedPassword = await hash(password)

    const user = User.build({ name, email, password: hashedPassword })
    await user.save()
    return res.status(201).json({ message: 'User created successfully' })
  } catch (error) {
    next(error)
  }
})


module.exports = router;
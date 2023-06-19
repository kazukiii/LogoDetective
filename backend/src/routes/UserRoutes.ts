import express from 'express'
import { UserController } from '../controller/user.controller'

const router = express.Router()

router.post('/signup', async (req, res, next) => {
  try {
    const user = await UserController.signUp(req, res)
    res.status(201).json(user)
  } catch (error) {
    next(error)
  }
})

router.post('/login', async (req, res, next) => {
  try {
    const token = await UserController.logIn(req, res)
    res.status(200).json({ token })
  } catch (error) {
    next(error)
  }
})

export default router

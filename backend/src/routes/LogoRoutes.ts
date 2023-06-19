import express from 'express'
import multer from 'multer'
import { LogoController } from '../controller/logo.controller'

const upload = multer({ dest: 'uploads/' })

const router = express.Router()

router.post('/upload', upload.single('file'), async (req, res, next) => {
  try {
    await LogoController.detectLogos(req, res)
  } catch (error) {
    next(error)
  }
})

export default router

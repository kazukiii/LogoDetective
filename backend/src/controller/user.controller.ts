import { Request, Response } from 'express'
import { SignUpUseCase } from '../usecase/interactor/SignUpUseCase'
import { LogInUseCase } from '../usecase/interactor/LogInUseCase'

export class UserController {
  static async signUp(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body
      const token = await SignUpUseCase.execute(name, email, password)

      res.status(201).json({
        message: 'User registered successfully',
        token,
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message })
      } else {
        res.status(500).json({ message: 'An unexpected error occurred.' })
      }
    }
  }

  static async logIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const token = await LogInUseCase.execute(email, password)

      res.status(200).json({
        message: 'User logged in successfully',
        token,
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message })
      } else {
        res.status(500).json({ message: 'An unexpected error occurred.' })
      }
    }
  }
}

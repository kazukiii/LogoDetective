import { NextFunction, Request as ExpressRequest, Response } from 'express'
import jwt from 'jsonwebtoken'

interface Request extends ExpressRequest {
  user?: { id: string; email: string }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing.' })
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { id: string; email: string }
    req.user = payload
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' })
  }
}

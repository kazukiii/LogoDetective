import { Request, Response } from 'express'
import { DetectLogosUseCase } from '../usecase/interactor/DetectLogosUseCase'

export class LogoController {
  static async detectLogos(req: Request, res: Response) {
    try {
      const { file } = req
      const { userId } = req.params
      const fileName = file?.originalname || ''
      const filePath = file?.path || ''

      const detectLogsUseCase = new DetectLogosUseCase(filePath)
      const annotations = await detectLogsUseCase.execute(userId, fileName, filePath)

      res.status(200).json({ annotations })
    } catch (error) {
      res.status(500).json({ message: 'An unexpected error occurred.' })
    }
  }
}

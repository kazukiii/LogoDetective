import { IDetectLogos } from '../gateway/IDetectLogos'
import { DetectLogos } from '../../infrastructure/google/DetectLogos'
import { UploadedImage } from '../../domain/entity/uploadedImage.entity'
import { LogoDetection } from '../../domain/entity/logoDetection.entity'
import { UploadedImageRepository } from '../repository/uploadedImage.repository'
import { LogoDetectionRepository } from '../repository/logoDetection.repository'
import { UserRepository } from '../repository/user.repository'

export class DetectLogosUseCase {
  private readonly detectLogs: IDetectLogos

  constructor(fileName: string) {
    this.detectLogs = new DetectLogos(fileName)
  }

  async execute(userId: string, fileName: string, filePath: string) {
    const annotations = await this.detectLogs.execute()

    // TODO: fix me
    const users = await UserRepository.find()

    const uploadedImage = new UploadedImage()
    uploadedImage.userId = userId || users[0].id
    uploadedImage.fileName = fileName
    uploadedImage.filePath = filePath
    const savedUploadedImage = await UploadedImageRepository.save(uploadedImage)

    for (const annotation of annotations) {
      const logoDetection = new LogoDetection()
      logoDetection.uploadedImageId = savedUploadedImage.id
      logoDetection.description = annotation.description ? annotation.description : ''
      logoDetection.score = annotation.score ? annotation.score : 0
      await LogoDetectionRepository.save(logoDetection)
    }

    return annotations
  }
}

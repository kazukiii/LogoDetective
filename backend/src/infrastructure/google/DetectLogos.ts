import { ImageAnnotatorClient } from '@google-cloud/vision'
import { IDetectLogos } from '../../usecase/gateway/IDetectLogos'

export class DetectLogos implements IDetectLogos {
  private readonly fileName: string

  constructor(fileName: string) {
    this.fileName = fileName
  }

  async execute() {
    const client = new ImageAnnotatorClient()
    const [result] = await client.logoDetection(this.fileName)

    if (result.logoAnnotations == null) {
      return []
    }

    return result.logoAnnotations
  }
}

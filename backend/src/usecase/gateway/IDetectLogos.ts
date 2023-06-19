import { google } from '@google-cloud/vision/build/protos/protos'
import IEntityAnnotation = google.cloud.vision.v1.IEntityAnnotation

export interface IDetectLogos {
  execute(): Promise<IEntityAnnotation[]>
}

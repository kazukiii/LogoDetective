import { UploadedImage } from '../../domain/entity/uploadedImage.entity'
import { myDataSource } from '../../app-data-source'

export const UploadedImageRepository = myDataSource.getRepository(UploadedImage)

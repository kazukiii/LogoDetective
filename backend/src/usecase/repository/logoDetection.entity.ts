import { LogoDetection } from '../../domain/entity/logoDetection.entity'
import { myDataSource } from '../../app-data-source'

export const LogoDetectionRepository = myDataSource.getRepository(LogoDetection)

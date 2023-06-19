import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { ulid } from 'ulid'
import { UploadedImage } from './uploadedImage.entity'

@Entity('logo_detections')
export class LogoDetection {
  @PrimaryColumn('varchar', { name: 'id' })
  id: string = ulid()

  @Column({ name: 'uploaded_image_id' })
  uploadedImageId: string

  @Column({ name: 'description' })
  description: string

  @Column({ name: 'score' })
  score: number

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at' })
  deletedAt: Date

  @ManyToOne(() => UploadedImage, uploadedImage => uploadedImage.logoDetections)
  @JoinColumn({ name: 'uploaded_image_id' })
  uploadedImage: UploadedImage
}

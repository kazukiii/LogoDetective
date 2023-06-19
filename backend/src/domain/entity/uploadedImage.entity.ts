import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { ulid } from 'ulid'
import { User } from './user.entity'
import { LogoDetection } from './logoDetection.entity'

@Entity('uploaded_images')
export class UploadedImage {
  @PrimaryColumn('varchar', { name: 'id' })
  id: string = ulid()

  @Column({ name: 'user_id' })
  userId: string

  @Column({ name: 'file_name' })
  fileName: string

  @Column({ name: 'file_path' })
  filePath: string

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at' })
  deletedAt: Date

  @ManyToOne(() => User, user => user.uploadedImages)
  @JoinColumn({ name: 'user_id' })
  user: User

  @OneToMany(() => LogoDetection, logoDetection => logoDetection.uploadedImage)
  logoDetections: LogoDetection[]
}

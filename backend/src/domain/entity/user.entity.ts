import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { ulid } from 'ulid'

@Entity('users')
export class User {
  @PrimaryColumn('varchar', { name: 'id' })
  id: string = ulid()

  @Column({ name: 'name' })
  name: string

  @Column({ name: 'email', unique: true })
  email: string

  @Column({ name: 'password_hash' })
  passwordHash: string

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at' })
  deletedAt: Date
}

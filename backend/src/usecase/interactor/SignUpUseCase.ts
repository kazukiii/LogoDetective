import bcrypt from 'bcrypt'
import { User } from '../../domain/entity/user.entity'
import { UserRepository } from '../repository/user.repository'

export class SignUpUseCase {
  static async execute(name: string, email: string, password: string) {
    const existingUser = await UserRepository.findOneBy({ email })

    if (existingUser) {
      throw new Error('User already exists.')
    }

    const salt = Number(process.env.BCRYPT_SALT) || 10
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = new User()
    user.name = name
    user.email = email
    user.passwordHash = hashedPassword
    await UserRepository.save(user)

    return user
  }
}

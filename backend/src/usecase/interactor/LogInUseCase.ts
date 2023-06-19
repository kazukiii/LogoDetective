import bcrypt from 'bcrypt'
import { UserRepository } from '../repository/user.repository'

export class LogInUseCase {
  static async execute(email: string, password: string) {
    const user = await UserRepository.findOneBy({ email })

    if (!user) {
      throw new Error('UserEntity not found.')
    }

    const isValidPassword = await bcrypt.compare(password, user.passwordHash)

    if (!isValidPassword) {
      throw new Error('Invalid login credentials.')
    }

    return user
  }
}

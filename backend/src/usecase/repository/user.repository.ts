import { User } from '../../domain/entity/user.entity'
import { myDataSource } from '../../app-data-source'

export const UserRepository = myDataSource.getRepository(User)

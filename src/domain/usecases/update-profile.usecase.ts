import { IUserRepository } from '../repositories/user.repository'

export class UpdateProfileUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private usersRepository: IUserRepository) {}

  async execute(bio: string) {
    await this.usersRepository.updateProfile(bio)
  }
}

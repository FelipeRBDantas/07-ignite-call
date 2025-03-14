import { api } from '@/infra/axios/axios'

import { IUserRepository } from '@/domain/repositories/user.repository'

export class UserRepository implements IUserRepository {
  async updateProfile(bio: string): Promise<void> {
    await api.put(`/users/profile`, { bio })
  }
}

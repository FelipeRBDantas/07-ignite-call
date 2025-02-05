export interface IUserRepository {
  updateProfile(bio: string): Promise<void>
}

import { useUpdateProfileModel } from '@/app/view-models/update-profile.view-model'

import { UpdateProfileView } from '@/app/views/register/update-profile/update-profile.view'

import { UserRepository } from '@/data/repositories/user.repository'

import { UpdateProfileUseCase } from '@/domain/usecases/update-profile.usecase'

export default function UpdateProfile() {
  const userRepository = new UserRepository()

  const updateProfileUseCase = new UpdateProfileUseCase(userRepository)

  const methods = useUpdateProfileModel(updateProfileUseCase)

  return <UpdateProfileView {...methods} />
}

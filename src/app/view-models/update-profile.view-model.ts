import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { useSession } from 'next-auth/react'

import { useRouter } from 'next/router'

import { UpdateProfileUseCase } from '@/domain/usecases/update-profile.usecase'

import { updateProfileFormSchema } from '@/domain/validations/update-profile.schema'

import { UpdateProfileFormData } from '@/domain/model/update-profile.type'

export const useUpdateProfileModel = (
  updateProfileUseCase: UpdateProfileUseCase,
) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileFormSchema),
  })

  const router = useRouter()

  const session = useSession()

  async function handleUpdateProfile(data: UpdateProfileFormData) {
    console.log(data)

    await updateProfileUseCase.execute(data.bio)

    await router.push(`/schedule/${session.data?.user.username}`)
  }

  return {
    isSubmitting,
    register,
    handleSubmit,
    handleUpdateProfile,
    session,
  }
}

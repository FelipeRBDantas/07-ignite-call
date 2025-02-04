import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { updateProfileFormSchema } from './update-profile.schema'

import { UpdateProfileFormData } from './update-profile.type'

export const useUpdateProfileModel = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileFormSchema),
  })

  async function handleUpdateProfile(data: UpdateProfileFormData) {
    console.log(data)
  }

  return {
    isSubmitting,
    register,
    handleSubmit,
    handleUpdateProfile,
  }
}

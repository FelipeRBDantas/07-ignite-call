import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { useSession } from 'next-auth/react'

import { useRouter } from 'next/router'

import { api } from '@/lib/axios'

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

  const session = useSession()

  const router = useRouter()

  async function handleUpdateProfile(data: UpdateProfileFormData) {
    console.log(data)

    await api.put('/users/profile', { bio: data.bio })

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

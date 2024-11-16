import { useForm } from 'react-hook-form'

import { useRouter } from 'next/router'

import { zodResolver } from '@hookform/resolvers/zod'

import { claimUsernameFormSchema } from './claimUsernameForm.schema'

import { ClaimUsernameFormData } from './claimUsernameForm.type'

export const useClaimUsernameFormModel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }

  return {
    errors,
    isSubmitting,
    register,
    handleSubmit,
    handleClaimUsername,
  }
}

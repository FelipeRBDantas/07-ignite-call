import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { claimUsernameFormSchema } from './claimUsernameForm.schema'

import { ClaimUsernameFormData } from './claimUsernameForm.type'

export const useClaimUsernameFormModel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return {
    errors,
    register,
    handleSubmit,
    handleClaimUsername,
  }
}

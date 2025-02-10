import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { ConfirmFormData } from '@/domain/model/confirm.type'

import { confirmFormSchema } from '@/domain/validations/confirm.schema'

export const useConfirmModel = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data)
  }

  return {
    register,
    handleSubmit,
    isSubmitting,
    errors,
    handleConfirmScheduling,
  }
}

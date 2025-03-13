import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import dayjs from 'dayjs'

import { ConfirmFormData } from '@/domain/model/confirm.type'

import { confirmFormSchema } from '@/domain/validations/confirm.schema'

import { ConfirmStepProps } from '../views/schedule/schedule-form/confirm-step'

export const useConfirmModel = (calendarStepProps: ConfirmStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  const describeDate = dayjs(calendarStepProps.schedulingDate).format(
    'DD[ de ]MMMM[ de ]YYYY',
  )

  const describeTime = dayjs(calendarStepProps.schedulingDate).format(
    'HH:mm[h]',
  )

  function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data)
  }

  return {
    register,
    handleSubmit,
    handleConfirmScheduling,
    isSubmitting,
    errors,
    describeDate,
    describeTime,
  }
}

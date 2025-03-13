import { useRouter } from 'next/router'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import dayjs from 'dayjs'

import { ConfirmFormData } from '@/domain/model/confirm.type'

import { confirmFormSchema } from '@/domain/validations/confirm.schema'

import { ScheduleUseCase } from '@/domain/usecases/schedule.usecase'

import { ConfirmStepProps } from '../views/schedule/schedule-form/confirm-step'

import { ScheduleFormData } from '@/domain/model/schedule.type'

export const useConfirmModel = (
  scheduleUseCase: ScheduleUseCase,
  calendarStepProps: ConfirmStepProps,
) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  const router = useRouter()

  const username = String(router.query.username)

  const describeDate = dayjs(calendarStepProps.schedulingDate).format(
    'DD[ de ]MMMM[ de ]YYYY',
  )

  const describeTime = dayjs(calendarStepProps.schedulingDate).format(
    'HH:mm[h]',
  )

  function treatFormData(formData: ConfirmFormData): ScheduleFormData {
    return { ...formData, date: calendarStepProps.schedulingDate }
  }

  async function handleConfirmScheduling(data: ConfirmFormData) {
    const formData = treatFormData(data)

    await scheduleUseCase.execute(username, formData)

    calendarStepProps.onCancelConfirmation()
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

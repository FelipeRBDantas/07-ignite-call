import { useFieldArray, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { useRouter } from 'next/router'

import { api } from '@/infra/axios/axios'

import { getWeekDays } from '@/shared/utils/get-week-days'

import {
  TimeIntervalsFormInput,
  TimeIntervalsFormOutput,
} from './time-intervals.type'

import { timeIntervalsFormSchema } from './time-intervals.schema'

export const useTimeIntervalsModel = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TimeIntervalsFormInput, unknown, TimeIntervalsFormOutput>({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
    resolver: zodResolver(timeIntervalsFormSchema),
  })

  const router = useRouter()

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  const intervals = watch('intervals')

  const weekDays = getWeekDays()

  async function handleSetTimeIntervals(data: TimeIntervalsFormOutput) {
    console.log(data)

    const { intervals } = data

    await api.post('/users/time-intervals', { intervals })

    await router.push('/register/update-profile')
  }

  return {
    handleSetTimeIntervals,
    handleSubmit,
    fields,
    weekDays,
    register,
    control,
    intervals,
    errors,
    isSubmitting,
  }
}

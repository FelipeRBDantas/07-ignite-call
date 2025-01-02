import { useFieldArray, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { getWeekDays } from '@/utils/get-week-days'

import { TimeIntervalsFormData } from './time-intervals.type'

import { timeIntervalsFormSchema } from './time-intervals.schema'

export const useTimeIntervalsModel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TimeIntervalsFormData>({
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

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  const weekDays = getWeekDays()

  async function handleSetTimeIntervals() {}

  return {
    handleSetTimeIntervals,
    handleSubmit,
    fields,
    weekDays,
    register,
  }
}

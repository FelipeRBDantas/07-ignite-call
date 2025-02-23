import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import dayjs from 'dayjs'

import { AvailabilityUseCase } from '@/domain/usecases/availability.usecase'

export const useScheduleModel = (availabilityUseCase: AvailabilityUseCase) => {
  const [selectedDate, isSelectedDate] = useState<Date | null>(null)

  const [availability, isAvailability] = useState<null>(null)

  const router = useRouter()

  const username = String(router.query.username)

  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null

  const describeDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ] MMMM')
    : null

  useEffect(() => {
    if (!selectedDate) {
      return
    }

    availabilityUseCase
      .execute(username, dayjs(selectedDate).format('YYYY-MM-DD'))
      .then((response) => {
        console.log(response)
      })
      .catch(console.error)
  }, [availabilityUseCase, selectedDate, username])

  return {
    isDateSelected,
    selectedDate,
    isSelectedDate,
    weekDay,
    describeDate,
  }
}

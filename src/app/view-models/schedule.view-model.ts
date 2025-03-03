import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import dayjs from 'dayjs'

import { AvailabilityUseCase } from '@/domain/usecases/availability.usecase'

import { GetAvailability } from '@/domain/model/availability.type'

type Availability = GetAvailability

export const useScheduleModel = (availabilityUseCase: AvailabilityUseCase) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const [availability, setAvailability] = useState<Availability | null>(null)

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
        setAvailability(response.data)
      })
      .catch(console.error)
  }, [availabilityUseCase, selectedDate, username])

  return {
    isDateSelected,
    selectedDate,
    setSelectedDate,
    availability,
    weekDay,
    describeDate,
  }
}

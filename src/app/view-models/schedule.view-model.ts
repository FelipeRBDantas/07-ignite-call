import { useState } from 'react'

import { useRouter } from 'next/router'

import dayjs from 'dayjs'

import { useQuery } from '@tanstack/react-query'

import { AvailabilityUseCase } from '@/domain/usecases/availability.usecase'

import { GetAvailability } from '@/domain/model/availability.type'

type Availability = GetAvailability

export const useScheduleModel = (availabilityUseCase: AvailabilityUseCase) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const router = useRouter()

  const username = String(router.query.username)

  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null

  const describeDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ] MMMM')
    : null

  const selectedDateWithoutTime = selectedDate
    ? dayjs(selectedDate).format('YYYY-MM-DD')
    : ''

  const { data: availability } = useQuery<Availability>({
    queryKey: ['availability', selectedDateWithoutTime],
    queryFn: async () => {
      const response = await availabilityUseCase.execute(
        username,
        selectedDateWithoutTime,
      )

      return response.data
    },
    enabled: !!selectedDate,
  })

  return {
    isDateSelected,
    selectedDate,
    setSelectedDate,
    availability,
    weekDay,
    describeDate,
  }
}

import { useState } from 'react'

import { useRouter } from 'next/router'

import dayjs from 'dayjs'

import { useQuery } from '@tanstack/react-query'

import { AvailabilityUseCase } from '@/domain/usecases/availability.usecase'

import { GetAvailability } from '@/domain/model/availability.type'

import { CalendarStepProps } from '../views/schedule/schedule-form/calendar-step'

type Availability = GetAvailability

export const useScheduleModel = (
  availabilityUseCase?: AvailabilityUseCase,
  calendarStepProps?: CalendarStepProps,
) => {
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

  const timezoneOffset = selectedDate ? selectedDate.getTimezoneOffset() : 0

  const { data: availability } = useQuery<Availability>({
    queryKey: ['availability', selectedDateWithoutTime],
    queryFn: async () => {
      const response = await availabilityUseCase?.execute(
        username,
        selectedDateWithoutTime,
        timezoneOffset,
      )

      return response!.data
    },
    enabled: !!selectedDate,
  })

  function handleSelectTime(hour: number) {
    const dateWithTime = dayjs(selectedDate)
      .set('hour', hour)
      .startOf('hour')
      .toDate()

    calendarStepProps?.onSelectedDateTime(dateWithTime)
  }

  return {
    isDateSelected,
    selectedDate,
    setSelectedDate,
    handleSelectTime,
    availability,
    weekDay,
    describeDate,
  }
}

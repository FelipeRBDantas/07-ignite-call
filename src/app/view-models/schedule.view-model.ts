import { useState } from 'react'

import dayjs from 'dayjs'

export const useScheduleModel = () => {
  const [selectedDate, isSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null

  const describeDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ] MMMM')
    : null

  return {
    isDateSelected,
    selectedDate,
    isSelectedDate,
    weekDay,
    describeDate,
  }
}

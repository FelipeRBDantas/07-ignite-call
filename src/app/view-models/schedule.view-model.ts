import { useState } from 'react'

export const useScheduleModel = () => {
  const [selectedDate, isSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  return {
    isDateSelected,
    selectedDate,
    isSelectedDate,
  }
}

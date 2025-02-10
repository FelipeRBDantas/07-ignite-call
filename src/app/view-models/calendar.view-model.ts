import { useState } from 'react'

import dayjs from 'dayjs'

import { getWeekDays } from '@/shared/utils/get-week-days'

export const useCalendarModel = () => {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  const shortWeekDays = getWeekDays({ short: true })

  const currentMonth = currentDate.format('MMMM')

  const currentYear = currentDate.format('YYYY')

  function handlePreviousMonth() {
    setCurrentDate((currentDate) => {
      return currentDate.subtract(1, 'month')
    })
  }

  function handleNextMonth() {
    setCurrentDate((currentDate) => {
      return currentDate.add(1, 'month')
    })
  }

  return {
    shortWeekDays,
    currentMonth,
    currentYear,
    handlePreviousMonth,
    handleNextMonth,
  }
}

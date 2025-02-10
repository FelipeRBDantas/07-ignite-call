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

  return {
    shortWeekDays,
    currentMonth,
    currentYear,
  }
}

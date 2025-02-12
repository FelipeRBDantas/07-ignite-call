import { useMemo, useState } from 'react'

import dayjs from 'dayjs'

import { getWeekDays } from '@/shared/utils/get-week-days'

export const useCalendarModel = () => {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  const shortWeekDays = getWeekDays({ short: true })

  const currentMonth = currentDate.format('MMMM')

  const currentYear = currentDate.format('YYYY')

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1)
    })

    const firstWeekDay = currentDate.get('day')

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return currentDate.subtract(i + 1, 'day')
      })
      .reverse()

    const lastDayInCurrentMonth = currentDate.set(
      'date',
      currentDate.daysInMonth(),
    )

    const lastWeekDay = lastDayInCurrentMonth.get('day')

    const lastMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 1, 'day')
    })

    const calendarDays = [
      ...previousMonthFillArray.map((date) => {
        return { date, disabled: true }
      }),
      ...daysInMonthArray.map((date) => {
        return { date, disabled: false }
      }),
      ...lastMonthFillArray.map((date) => {
        return { date, disabled: true }
      }),
    ]

    // const calendarWeeks = calendarDays.reduce((acc, day) => {}, [])

    return calendarDays
  }, [currentDate])

  console.log(calendarWeeks)

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

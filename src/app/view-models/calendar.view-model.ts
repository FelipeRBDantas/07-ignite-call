import { useMemo, useState } from 'react'

import dayjs from 'dayjs'

import { useQuery } from '@tanstack/react-query'

import { useRouter } from 'next/router'

import { getWeekDays } from '@/shared/utils/get-week-days'

import { BlockedDatesUseCase } from '@/domain/usecases/blocked-dates.usecase'

interface CalendarWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean | undefined
  }>
}

type CalendarWeeks = CalendarWeek[]

interface BlockedDates {
  blockedWeekDays: number[]
}

export const useCalendarModel = (blockedDatesUseCase: BlockedDatesUseCase) => {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  const shortWeekDays = getWeekDays({ short: true })

  const currentMonth = currentDate.format('MMMM')

  const currentYear = currentDate.format('YYYY')

  const router = useRouter()

  const username = String(router.query.username)

  const { data: blockedDates } = useQuery<BlockedDates>({
    queryKey: [
      'blocked-dates',
      currentDate.get('year'),
      currentDate.get('month'),
    ],
    queryFn: async () => {
      const response = await blockedDatesUseCase.execute(
        username,
        currentDate.get('year'),
        currentDate.get('month'),
      )

      return response.data
    },
  })

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
        return {
          date,
          disabled:
            date.endOf('day').isBefore(new Date()) ||
            blockedDates?.blockedWeekDays?.includes(date.get('day')),
        }
      }),
      ...lastMonthFillArray.map((date) => {
        return { date, disabled: true }
      }),
    ]

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, i, original) => {
        const isNewWeek = i % 7 === 0

        if (isNewWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: original.slice(i, i + 7),
          })
        }

        return weeks
      },
      [],
    )

    return calendarWeeks
  }, [currentDate, blockedDates])

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
    blockedDates,
    calendarWeeks,
  }
}

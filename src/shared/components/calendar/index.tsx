import { CaretLeft, CaretRight } from 'phosphor-react'

import { useCalendarModel } from '@/app/view-models/calendar.view-model'

import { BlockedDatesRepository } from '@/data/repositories/blocked-dates.repository'

import { BlockedDatesUseCase } from '@/domain/usecases/blocked-dates.usecase'

import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'

interface CalendarProps {
  selectedDate: Date | null
  onDateSelected: (date: Date) => void
}

export function Calendar({ selectedDate, onDateSelected }: CalendarProps) {
  const blockedDatesRepository = new BlockedDatesRepository()

  const blockedDatesUseCase = new BlockedDatesUseCase(blockedDatesRepository)

  const {
    shortWeekDays,
    currentMonth,
    currentYear,
    handlePreviousMonth,
    handleNextMonth,
    blockedDates,
    calendarWeeks,
  } = useCalendarModel(blockedDatesUseCase)

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>

        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Previous month">
            <CaretLeft />
          </button>

          <button onClick={handleNextMonth} title="Next month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {calendarWeeks.map((week) => (
            <tr key={week.week}>
              {week.days.map(({ date, disabled }) => (
                <td key={date.toISOString()}>
                  <CalendarDay
                    onClick={() => onDateSelected(date.toDate())}
                    disabled={
                      disabled
                      // && !blockedDates?.blockedDates.includes(date.get('date'))
                    }
                  >
                    {date.get('date')}
                  </CalendarDay>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}

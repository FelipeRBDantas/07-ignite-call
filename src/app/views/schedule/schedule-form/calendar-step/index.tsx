import { useScheduleModel } from '@/app/view-models/schedule.view-model'

import { AvailabilityRepository } from '@/data/repositories/availability.repository'

import { AvailabilityUseCase } from '@/domain/usecases/availability.usecase'

import { Calendar } from '@/shared/components/calendar'

import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

export interface CalendarStepProps {
  onSelectedDateTime: (date: Date) => void
}

export function CalendarStep(calendarStepProps: CalendarStepProps) {
  const availabilityRepository = new AvailabilityRepository()

  const availabilityUseCase = new AvailabilityUseCase(availabilityRepository)

  const {
    isDateSelected,
    selectedDate,
    setSelectedDate,
    handleSelectTime,
    availability,
    weekDay,
    describeDate,
  } = useScheduleModel(availabilityUseCase, calendarStepProps)

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{describeDate}</span>
          </TimePickerHeader>

          <TimePickerList>
            {availability?.possibleTimes.map((hour) => (
              <TimePickerItem
                key={hour}
                disabled={!availability.availableTimes.includes(hour)}
                onClick={() => handleSelectTime(hour)}
              >
                {String(hour).padStart(2, '0')}:00h
              </TimePickerItem>
            ))}
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}

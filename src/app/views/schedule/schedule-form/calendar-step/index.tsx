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

export function CalendarStep() {
  const availabilityRepository = new AvailabilityRepository()

  const availabilityUseCase = new AvailabilityUseCase(availabilityRepository)

  const {
    isDateSelected,
    selectedDate,
    isSelectedDate,
    weekDay,
    describeDate,
  } = useScheduleModel(availabilityUseCase)

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={isSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{describeDate}</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>09:00h</TimePickerItem>
            <TimePickerItem>10:00h</TimePickerItem>
            <TimePickerItem>11:00h</TimePickerItem>
            <TimePickerItem>12:00h</TimePickerItem>
            <TimePickerItem>13:00h</TimePickerItem>
            <TimePickerItem>14:00h</TimePickerItem>
            <TimePickerItem>15:00h</TimePickerItem>
            <TimePickerItem>16:00h</TimePickerItem>
            <TimePickerItem>17:00h</TimePickerItem>
            <TimePickerItem>18:00h</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}

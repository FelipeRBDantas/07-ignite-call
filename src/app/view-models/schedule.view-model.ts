// import { ScheduleUseCase } from '@/domain/usecases/schedule.usecase'

import { useState } from 'react'

export const useScheduleModel = (/* scheduleUseCase: ScheduleUseCase */) => {
  const [selectedDate, isSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  return {
    isDateSelected,
    selectedDate,
    isSelectedDate,
  }
}

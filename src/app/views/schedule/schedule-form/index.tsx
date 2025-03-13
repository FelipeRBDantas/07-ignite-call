import { useScheduleFormModel } from '@/app/view-models/schedule-form.view-model'

import { CalendarStep } from './calendar-step'

import { ConfirmStep } from './confirm-step'

export function ScheduleForm() {
  const { selectDateTime, setSelectDateTime } = useScheduleFormModel()

  if (selectDateTime) {
    return <ConfirmStep />
  }

  return <CalendarStep onSelectedDateTime={setSelectDateTime} />
}

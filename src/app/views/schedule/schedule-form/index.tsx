import { useScheduleFormModel } from '@/app/view-models/schedule-form.view-model'

import { CalendarStep } from './calendar-step'

import { ConfirmStep } from './confirm-step'

export function ScheduleForm() {
  const { selectedDateTime, setSelectedDateTime, handleClearSelectedDateTime } =
    useScheduleFormModel()

  if (selectedDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateTime}
        onCancelConfirmation={handleClearSelectedDateTime}
      />
    )
  }

  return <CalendarStep onSelectedDateTime={setSelectedDateTime} />
}

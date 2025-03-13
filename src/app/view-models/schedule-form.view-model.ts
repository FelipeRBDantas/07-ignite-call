import { useState } from 'react'

export const useScheduleFormModel = () => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>()

  function handleClearSelectedDateTime() {
    setSelectedDateTime(null)
  }

  return {
    selectedDateTime,
    setSelectedDateTime,
    handleClearSelectedDateTime,
  }
}

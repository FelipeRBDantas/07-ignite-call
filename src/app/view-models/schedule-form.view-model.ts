import { useState } from 'react'

export const useScheduleFormModel = () => {
  const [selectDateTime, setSelectDateTime] = useState<Date | null>()

  console.log(selectDateTime)

  return {
    selectDateTime,
    setSelectDateTime,
  }
}

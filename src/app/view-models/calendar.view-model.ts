import { getWeekDays } from '@/shared/utils/get-week-days'

export const useCalendarModel = () => {
  const shortWeekDays = getWeekDays({ short: true })

  return {
    shortWeekDays,
  }
}

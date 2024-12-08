import { useConnectCalendarModel } from './connect-calendar.model'

import { ConnectCalendarView } from './connect-calendar.view'

export default function ConnectCalendar() {
  const methods = useConnectCalendarModel()

  return <ConnectCalendarView {...methods} />
}

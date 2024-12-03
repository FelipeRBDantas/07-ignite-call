import { useConnectCalendarModel } from './register.model'

import { ConnectCalendarView } from './register.view'

export default function ConnectCalendar() {
  const methods = useConnectCalendarModel()

  return <ConnectCalendarView {...methods} />
}

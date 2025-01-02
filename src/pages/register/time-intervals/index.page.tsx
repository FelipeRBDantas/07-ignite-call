import { useTimeIntervalsModel } from './connect-calendar.model'

import { TimeIntervalsView } from './connect-calendar.view'

export default function TimeIntervals() {
  const methods = useTimeIntervalsModel()

  return <TimeIntervalsView {...methods} />
}

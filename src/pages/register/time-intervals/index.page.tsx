import { useTimeIntervalsModel } from './time-intervals.model'

import { TimeIntervalsView } from './time-intervals.view'

export default function TimeIntervals() {
  const methods = useTimeIntervalsModel()

  return <TimeIntervalsView {...methods} />
}

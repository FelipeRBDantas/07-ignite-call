import { z } from 'zod'

import { timeIntervalsFormSchema } from './time-intervals.schema'

export type TimeIntervalsFormData = z.infer<typeof timeIntervalsFormSchema>

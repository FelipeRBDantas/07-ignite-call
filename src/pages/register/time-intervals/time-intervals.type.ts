import { z } from 'zod'

import { timeIntervalsFormSchema } from './time-intervals.schema'

export type TimeIntervalsFormInput = z.input<typeof timeIntervalsFormSchema>

export type TimeIntervalsFormOutput = z.output<typeof timeIntervalsFormSchema>

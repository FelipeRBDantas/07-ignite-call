import { z } from 'zod'

export const createSchedulingBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  observations: z.string().nullable(),
  date: z.string().datetime(),
})

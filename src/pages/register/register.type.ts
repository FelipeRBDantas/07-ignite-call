import { z } from 'zod'

import { registerFormSchema } from './register.schema'

export type RegisterFormData = z.infer<typeof registerFormSchema>

import { z } from 'zod'

import { confirmFormSchema } from '../validations/confirm.schema'

export type ConfirmFormData = z.infer<typeof confirmFormSchema>

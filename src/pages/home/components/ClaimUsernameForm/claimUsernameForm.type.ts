import { z } from 'zod'

import { claimUsernameFormSchema } from './claimUsernameForm.schema'

export type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

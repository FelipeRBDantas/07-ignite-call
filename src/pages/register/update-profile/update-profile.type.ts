import { z } from 'zod'

import { updateProfileFormSchema } from './update-profile.schema'

export type UpdateProfileFormData = z.infer<typeof updateProfileFormSchema>

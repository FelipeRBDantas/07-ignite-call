import { z } from 'zod'

import { updateProfileFormSchema } from '../validations/update-profile.schema'

export type UpdateProfileFormData = z.infer<typeof updateProfileFormSchema>

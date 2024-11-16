import { z } from 'zod'

export const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, 'O usuário precisa ter pelo menos 3 letras.')
    .regex(/^([a-z\\-]+)$/i, 'O usuário precisa ter apenas letras e hifens.')
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, 'O nome precisa ter pelo menos 3 letras.'),
})

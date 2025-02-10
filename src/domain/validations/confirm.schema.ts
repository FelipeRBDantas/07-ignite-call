import { z } from 'zod'

export const confirmFormSchema = z.object({
  name: z.string().min(3, 'O nome precisa ter no mínimo 3 caracteres.'),
  email: z.string().email({ message: 'Digite um e-mail válido.' }),
  observations: z.string().nullable(),
})

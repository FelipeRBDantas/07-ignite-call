import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { registerFormSchema } from './register.schema'

import { RegisterFormData } from './register.type'

export const useRegisterModel = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query?.username) {
      setValue('username', String(router.query?.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

  return {
    errors,
    isSubmitting,
    register,
    handleSubmit,
    handleRegister,
  }
}

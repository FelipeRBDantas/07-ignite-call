import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { useSession } from 'next-auth/react'

import { useRouter } from 'next/router'

import { GetServerSideProps } from 'next'

import { getServerSession } from 'next-auth'

import { UpdateProfileUseCase } from '@/domain/usecases/update-profile.usecase'

import { UserRepository } from '@/data/repositories/user.repository'

import { updateProfileFormSchema } from '@/domain/validations/update-profile.schema'

import { UpdateProfileFormData } from '@/domain/model/update-profile.type'

import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'

export const useUpdateProfileModel = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileFormSchema),
  })

  const router = useRouter()

  const session = useSession()

  async function handleUpdateProfile(data: UpdateProfileFormData) {
    console.log(data)

    const userRepository = new UserRepository()

    const updateProfileUseCase = new UpdateProfileUseCase(userRepository)

    await updateProfileUseCase.execute(data.bio)

    await router.push(`/schedule/${session.data?.user.username}`)
  }

  return {
    isSubmitting,
    register,
    handleSubmit,
    handleUpdateProfile,
    session,
  }
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return { props: { session } }
}

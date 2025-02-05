import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { useSession } from 'next-auth/react'

import { useRouter } from 'next/router'

import { GetServerSideProps } from 'next'

import { getServerSession } from 'next-auth'

import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'

import { api } from '@/lib/axios'

import { updateProfileFormSchema } from './update-profile.schema'

import { UpdateProfileFormData } from './update-profile.type'

export const useUpdateProfileModel = (
  session: ReturnType<typeof useSession>,
) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileFormSchema),
  })

  const router = useRouter()

  async function handleUpdateProfile(data: UpdateProfileFormData) {
    console.log(data)

    await api.put('/users/profile', { bio: data.bio })

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

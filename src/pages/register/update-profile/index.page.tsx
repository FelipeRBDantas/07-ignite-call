import { GetServerSideProps } from 'next'

import { getServerSession } from 'next-auth'

import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'

import { useUpdateProfileModel } from './update-profile.model'

import { UpdateProfileView } from './update-profile.view'

export default function UpdateProfile() {
  const methods = useUpdateProfileModel()

  return <UpdateProfileView {...methods} />
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return { props: { session } }
}

import { useSession } from 'next-auth/react'

import { useUpdateProfileModel } from './update-profile.model'

import { UpdateProfileView } from './update-profile.view'

export default function UpdateProfile() {
  const session = useSession()

  const methods = useUpdateProfileModel(session)

  return <UpdateProfileView {...methods} />
}

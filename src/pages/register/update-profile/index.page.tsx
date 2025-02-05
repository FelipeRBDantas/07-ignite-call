import { useUpdateProfileModel } from './update-profile.model'

import { UpdateProfileView } from './update-profile.view'

export default function UpdateProfile() {
  const methods = useUpdateProfileModel()

  return <UpdateProfileView {...methods} />
}

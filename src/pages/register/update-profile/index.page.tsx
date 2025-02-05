import { useUpdateProfileModel } from '@/presentation/view-models/update-profile.view-model'

import { UpdateProfileView } from '@/views/register/update-profile/update-profile.view'

export default function UpdateProfile() {
  const methods = useUpdateProfileModel()

  return <UpdateProfileView {...methods} />
}

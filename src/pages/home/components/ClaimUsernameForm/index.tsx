import { useClaimUsernameFormModel } from './claimUsernameForm.model'

import { ClaimUsernameFormView } from './claimUsernameForm.view'

export function ClaimUsernameForm() {
  const methods = useClaimUsernameFormModel()

  return <ClaimUsernameFormView {...methods} />
}

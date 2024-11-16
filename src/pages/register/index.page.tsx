import { useRegisterModel } from './register.model'

import { RegisterView } from './register.view'

export default function Register() {
  const methods = useRegisterModel()

  return <RegisterView {...methods} />
}

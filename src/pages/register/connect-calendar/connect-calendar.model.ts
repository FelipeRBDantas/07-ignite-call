import { signIn, useSession } from 'next-auth/react'

import { useRouter } from 'next/router'

export const useConnectCalendarModel = () => {
  const session = useSession()

  console.log(session)

  const router = useRouter()

  const hasAuthError = !!router.query?.error

  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar(provider = 'google') {
    return await signIn(provider)
  }

  return {
    isSignedIn,
    hasAuthError,
    handleConnectCalendar,
  }
}

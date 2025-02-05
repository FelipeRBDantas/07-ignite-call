import { signIn, useSession } from 'next-auth/react'

import { useRouter } from 'next/router'

export const useConnectCalendarModel = () => {
  const session = useSession()

  const router = useRouter()

  const hasAuthError = !!router.query?.error

  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar(provider = 'google') {
    await signIn(provider)
  }

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }

  return {
    isSignedIn,
    hasAuthError,
    handleConnectCalendar,
    handleNavigateToNextStep,
  }
}

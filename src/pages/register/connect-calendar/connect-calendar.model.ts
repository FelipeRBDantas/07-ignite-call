import { signIn, useSession } from 'next-auth/react'

export const useConnectCalendarModel = () => {
  const session = useSession()

  async function handleConnectCalendar(provider = 'google') {
    return await signIn(provider)
  }

  return {
    session,
    handleConnectCalendar,
  }
}

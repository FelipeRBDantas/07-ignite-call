import type { AppProps } from 'next/app'

import { SessionProvider } from 'next-auth/react'

import { QueryClientProvider } from '@tanstack/react-query'

import { DefaultSeo } from 'next-seo'

import { queryClient } from '@/infra/react-query/react-query'

import '@/shared/utils/dayjs'

import { globalStyles } from '@/styles/global'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://ignite-call.feliperbdantas.com.br',
            siteName: 'Ignite Call',
          }}
        />

        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}

import { GetStaticPaths, GetStaticProps } from 'next'

import { prisma } from '@/infra/prisma/prisma'

import { ScheduleView } from '@/app/views/schedule/schedule.view'

import { useScheduleModel } from '@/app/view-models/schedule.view-model'

import { ScheduleProps } from '@/domain/model/schedule.type'

export default function Schedule({ user }: ScheduleProps) {
  const methods = useScheduleModel()

  return <ScheduleView {...methods} user={user} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username)

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return { notFound: true }
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}

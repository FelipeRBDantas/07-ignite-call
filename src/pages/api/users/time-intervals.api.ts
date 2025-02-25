import { NextApiRequest, NextApiResponse } from 'next'

import { getServerSession } from 'next-auth'

import { prisma } from '@/infra/prisma/prisma'

import { buildNextAuthOptions } from '../auth/[...nextauth].api'

import { timeIntervalsBodySchema } from './time-intervals.schema'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).end()
  }

  const { intervals } = timeIntervalsBodySchema.parse(req.body)

  await Promise.all(
    intervals.map((interval) => {
      return prisma.userTimeInterval.create({
        data: {
          user_id: session.user?.id,
          week_day: interval.weekDay,
          time_start_in_minutes: interval.startTimeInMinutes,
          time_end_in_minutes: interval.endTimeInMinutes,
        },
      })
    }),
  )

  return res.status(201).end()
}

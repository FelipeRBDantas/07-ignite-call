import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/infra/prisma/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const username = String(req.query.username)

  const { year, month } = req.query

  if (!year || !month) {
    return res.status(400).json({ message: 'Year or month not specified.' })
  }

  if (
    typeof year !== 'string' ||
    typeof month !== 'string' ||
    !/^\d{4}$/.test(year) ||
    !/^\d{2}$/.test(month)
  ) {
    return res
      .status(400)
      .json({ message: "Invalid date format. Use 'YYYY-MM'." })
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (!user) {
    return res.status(400).json({ message: 'User does not exist.' })
  }

  const availableWeekDays = await prisma.userTimeInterval.findMany({
    select: {
      week_day: true,
    },
    where: {
      user_id: user.id,
    },
  })

  const blockedWeekDays = [0, 1, 2, 3, 4, 5, 6].filter((weekDay) => {
    return !availableWeekDays.some((availableWeekDay) => {
      return availableWeekDay.week_day === weekDay
    })
  })

  return res.json({ blockedWeekDays })
}

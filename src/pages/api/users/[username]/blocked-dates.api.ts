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

  const yearNumber = Number(year)

  const monthNumber = Number(month)

  try {
    const schedulings = await prisma.scheduling.findMany({
      where: {
        user_id: user.id,
        date: {
          gte: new Date(yearNumber, monthNumber - 1, 1),
          lt: new Date(yearNumber, monthNumber, 1),
        },
      },
      select: {
        date: true,
      },
    })

    const userTimeIntervals = await prisma.userTimeInterval.findMany({
      where: {
        user_id: user.id,
      },
    })

    const schedulingsPerDay = new Map<number, number>()

    schedulings.forEach(({ date }) => {
      const day = date.getDate()

      const count = schedulingsPerDay.get(day) || 0

      schedulingsPerDay.set(day, count + 1)
    })

    const blockedDates: number[] = []

    schedulingsPerDay.forEach((total, date) => {
      const dayOfWeek = new Date(yearNumber, monthNumber - 1, date).getDay()

      const dayTimeInterval = userTimeIntervals.find(
        (interval) => interval.week_day === dayOfWeek,
      )

      if (dayTimeInterval) {
        const slotsAvailable =
          (dayTimeInterval.time_end_in_minutes -
            dayTimeInterval.time_start_in_minutes) /
          60

        if (total >= slotsAvailable) {
          blockedDates.push(date)
        }
      }
    })

    return res.json({ blockedWeekDays, blockedDates })
  } catch (error) {
    console.error('Error processing blocked dates:', error)
    return res.status(500).json({ message: 'Error processing blocked dates' })
  }
}

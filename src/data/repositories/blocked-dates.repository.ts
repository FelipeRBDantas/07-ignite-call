import { AxiosResponse } from 'axios'

import { api } from '@/infra/axios/axios'

import { GetBlockedDates } from '@/domain/model/blocked-dates.type'

import { IBlockedDatesRepository } from '@/domain/repositories/blocked-dates.repository'

export class BlockedDatesRepository implements IBlockedDatesRepository {
  async blockedDates(
    user: string,
    year: number,
    month: number,
  ): Promise<AxiosResponse<GetBlockedDates>> {
    return await api.get(`/users/${user}/blocked-dates`, {
      params: { year, month },
    })
  }
}

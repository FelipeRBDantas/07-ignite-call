import { AxiosResponse } from 'axios'

import { GetBlockedDates } from '../model/blocked-dates.type'

export interface IBlockedDatesRepository {
  blockedDates(
    user: string,
    year: number,
    month: number,
  ): Promise<AxiosResponse<GetBlockedDates>>
}

import { AxiosResponse } from 'axios'

import { GetAvailability } from '../model/availability.type'

export interface IAvailabilityRepository {
  availability(
    user: string,
    date: string,
    timezoneOffset: number,
  ): Promise<AxiosResponse<GetAvailability>>
}

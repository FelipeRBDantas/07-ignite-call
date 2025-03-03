import { AxiosResponse } from 'axios'

import { GetAvailability } from '../model/availability.type'

export interface IAvailabilityRepository {
  availability(
    user: string,
    date: string,
  ): Promise<AxiosResponse<GetAvailability>>
}

import { api } from '@/infra/axios/axios'

import { GetAvailability } from '@/domain/model/availability.type'

import { IAvailabilityRepository } from '@/domain/repositories/availability.repository'
import { AxiosResponse } from 'axios'

export class AvailabilityRepository implements IAvailabilityRepository {
  async availability(
    user: string,
    date: string,
  ): Promise<AxiosResponse<GetAvailability>> {
    return await api.get(`/users/${user}/availability`, { params: { date } })
  }
}

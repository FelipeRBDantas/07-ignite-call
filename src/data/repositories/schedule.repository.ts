import { api } from '@/infra/axios/axios'

import { IScheduleRepository } from '@/domain/repositories/schedule.repository'

import { ScheduleFormData } from '@/domain/model/schedule.type'

export class ScheduleRepository implements IScheduleRepository {
  async schedule(user: string, body: ScheduleFormData): Promise<void> {
    return await api.post(`/users/${user}/schedule`, body)
  }
}

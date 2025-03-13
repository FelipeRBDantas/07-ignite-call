import { ScheduleFormData } from '../model/schedule.type'

import { IScheduleRepository } from '../repositories/schedule.repository'

export class ScheduleUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private scheduleRepository: IScheduleRepository) {}

  async execute(user: string, body: ScheduleFormData) {
    return await this.scheduleRepository.schedule(user, body)
  }
}

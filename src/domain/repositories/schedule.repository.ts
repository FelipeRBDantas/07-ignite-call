import { ScheduleFormData } from '../model/schedule.type'

export interface IScheduleRepository {
  schedule(user: string, body: ScheduleFormData): Promise<void>
}

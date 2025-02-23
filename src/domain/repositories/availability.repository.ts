import { GetAvailability } from '../model/availability.type'

export interface IAvailabilityRepository {
  availability(user: string, date: string): Promise<GetAvailability | void>
}

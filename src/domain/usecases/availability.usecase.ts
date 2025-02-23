import { IAvailabilityRepository } from '../repositories/availability.repository'

export class AvailabilityUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private availabilityRepository: IAvailabilityRepository) {}

  async execute(user: string, date: string) {
    await this.availabilityRepository.availability(user, date)
  }
}

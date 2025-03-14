import { IBlockedDatesRepository } from '../repositories/blocked-dates.repository'

export class BlockedDatesUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private blockedDatesRepository: IBlockedDatesRepository) {}

  async execute(user: string, year: number, month: string) {
    return await this.blockedDatesRepository.blockedDates(user, year, month)
  }
}

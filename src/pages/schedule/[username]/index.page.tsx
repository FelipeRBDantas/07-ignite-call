// import { useScheduleModel } from '@/app/view-models/schedule.view-model'

import { ScheduleView } from '@/app/views/schedule/schedule.view'

import { useScheduleModel } from '@/app/view-models/schedule.view-model'

// import { ScheduleRepository } from '@/data/repositories/schedule.repository'

// import { ScheduleUseCase } from '@/domain/usecases/schedule.usecase'

export default function Schedule() {
  // const scheduleRepository = new ScheduleRepository()

  // const scheduleUseCase = new ScheduleUseCase(scheduleRepository)

  // const methods = useScheduleModel(scheduleUseCase)

  const methods = useScheduleModel()

  return <ScheduleView {...methods} />
}

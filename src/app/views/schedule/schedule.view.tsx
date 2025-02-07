import { useScheduleModel } from '@/app/view-models/schedule.view-model'

import { Avatar, Heading, Text } from '@feliperbdantas-ignite-ui/react'

import { ScheduleProps } from '@/domain/model/schedule.type'

import { Container, UserHeader } from './styles'

type IScheduleProps = ReturnType<typeof useScheduleModel> & ScheduleProps

export const ScheduleView = (props: IScheduleProps) => {
  const { user } = props

  return (
    <Container>
      <UserHeader>
        <Avatar src={user.avatarUrl} />

        <Heading>{user.name}</Heading>

        <Text>{user.bio}</Text>
      </UserHeader>
    </Container>
  )
}

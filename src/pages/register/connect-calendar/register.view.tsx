import { ArrowRight } from 'phosphor-react'

import {
  Button,
  Heading,
  MultiStep,
  Text,
} from '@feliperbdantas-ignite-ui/react'

import { useConnectCalendarModel } from './register.model'

import { Container, Header } from '../styles'

import { ConnectBox, ConnectItem } from './styles'

type ConnectCalendarProps = ReturnType<typeof useConnectCalendarModel>

export const ConnectCalendarView = (props: ConnectCalendarProps) => {
  const { handleConnectCalendar } = props

  return (
    <Container>
      <Header>
        <Heading as={'strong'}>Conecte sua agenda!</Heading>

        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem></ConnectItem>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}

import { ArrowRight } from 'phosphor-react'

import {
  Button,
  Heading,
  MultiStep,
  Text,
} from '@feliperbdantas-ignite-ui/react'

import { useConnectCalendarModel } from './connect-calendar.model'

import { Container, Header } from '../styles'

import { ConnectBox, ConnectItem } from './styles'

type ConnectCalendarProps = ReturnType<typeof useConnectCalendarModel>

export const ConnectCalendarView = (props: ConnectCalendarProps) => {
  const { session, handleConnectCalendar } = props

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
        <ConnectItem>
          <Text>Google Calendar</Text>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleConnectCalendar()}
          >
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <pre>{JSON.stringify(session.data)}</pre>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}

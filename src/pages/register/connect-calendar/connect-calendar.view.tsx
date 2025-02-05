import { ArrowRight, Check } from 'phosphor-react'

import {
  Button,
  Heading,
  MultiStep,
  Text,
} from '@feliperbdantas-ignite-ui/react'

import { useConnectCalendarModel } from './connect-calendar.model'

import { Container, Header } from '../../../views/register/styles'

import { AuthError, ConnectBox, ConnectItem } from './styles'

type ConnectCalendarProps = ReturnType<typeof useConnectCalendarModel>

export const ConnectCalendarView = (props: ConnectCalendarProps) => {
  const {
    isSignedIn,
    hasAuthError,
    handleConnectCalendar,
    handleNavigateToNextStep,
  } = props

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

          {isSignedIn ? (
            <Button size={'sm'} disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant={'secondary'}
              size={'sm'}
              onClick={() => handleConnectCalendar()}
            >
              Conectar
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError size={'sm'}>
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar
          </AuthError>
        )}

        <Button
          type="submit"
          onClick={handleNavigateToNextStep}
          disabled={!isSignedIn}
        >
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}

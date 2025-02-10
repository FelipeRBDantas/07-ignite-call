import {
  Button,
  Text,
  TextArea,
  TextInput,
} from '@feliperbdantas-ignite-ui/react'

import { ConfirmForm, FormActions, FormHeader } from './styles'
import { CalendarBlank } from 'phosphor-react'

export function ConfirmStep() {
  function handleConfirmScheduling() {}

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          01 de Fevereiro de 2025
        </Text>

        <Text>18:00h</Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>

        <TextInput placeholder="Seu nome" />
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>

        <TextInput placeholder="nome@example.com" />
      </label>

      <label>
        <Text size="sm">Observações</Text>

        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>

        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}

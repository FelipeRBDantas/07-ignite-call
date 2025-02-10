import {
  Button,
  Text,
  TextArea,
  TextInput,
} from '@feliperbdantas-ignite-ui/react'

import { CalendarBlank, Clock } from 'phosphor-react'

import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'

import { useConfirmModel } from '@/app/view-models/confirm.view-model'

export function ConfirmStep() {
  const {
    handleConfirmScheduling,
    register,
    handleSubmit,
    isSubmitting,
    errors,
  } = useConfirmModel()

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          01 de Fevereiro de 2025
        </Text>

        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>

        <TextInput placeholder="Seu nome" {...register('name')} />

        {errors.name && <FormError size="sm">{errors.name.message}</FormError>}
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>

        <TextInput
          type="email"
          placeholder="nome@example.com"
          {...register('email')}
        />

        {errors.email && (
          <FormError size="sm">{errors.email.message}</FormError>
        )}
      </label>

      <label>
        <Text size="sm">Observações</Text>

        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>

        <Button type="submit" disabled={isSubmitting}>
          Confirmar
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}

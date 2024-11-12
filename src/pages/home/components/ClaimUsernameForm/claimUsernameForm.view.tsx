import { ArrowRight } from 'phosphor-react'

import { Button, Text, TextInput } from '@feliperbdantas-ignite-ui/react'

import { useClaimUsernameFormModel } from './claimUsernameForm.model'

import { Form, FormAnnotation } from './styles'

type ClaimUsernameFormProps = ReturnType<typeof useClaimUsernameFormModel>

export const ClaimUsernameFormView = (props: ClaimUsernameFormProps) => {
  const { register, handleSubmit, handleClaimUsername } = props

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />

        <Button size="sm" type="submit">
          Reservar
          <ArrowRight />
        </Button>
      </Form>

      <FormAnnotation>
        <Text size="sm">
          {props.errors.username && (
            <span>{props.errors.username.message}</span>
          )}
        </Text>
      </FormAnnotation>
    </>
  )
}
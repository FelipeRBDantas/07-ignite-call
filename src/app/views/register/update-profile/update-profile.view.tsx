import { ArrowRight } from 'phosphor-react'

import { NextSeo } from 'next-seo'

import {
  Avatar,
  Button,
  Heading,
  MultiStep,
  Text,
  TextArea,
} from '@feliperbdantas-ignite-ui/react'

import { useUpdateProfileModel } from '@/app/view-models/update-profile.view-model'

import { Container, Header } from '../styles'

import { FormAnnotation, ProfileBox } from './styles'

type UpdateProfileProps = ReturnType<typeof useUpdateProfileModel>

export const UpdateProfileView = (props: UpdateProfileProps) => {
  const { isSubmitting, register, handleSubmit, handleUpdateProfile, session } =
    props

  return (
    <>
      <NextSeo title="Atualize seu perfil | Ignite Call" noindex />

      <Container>
        <Header>
          <Heading as={'strong'}>Bem-vindo ao Ignite Call</Heading>

          <Text>
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </Text>

          <MultiStep size={4} currentStep={4} />
        </Header>

        <ProfileBox as={'form'} onSubmit={handleSubmit(handleUpdateProfile)}>
          <label>
            <Text size={'sm'}>Foto de perfil</Text>

            <Avatar
              src={session.data?.user.avatar_url}
              referrerPolicy="no-referrer"
              alt={session.data?.user.name}
            />
          </label>

          <label>
            <Text size={'sm'}>Sobre você</Text>

            <TextArea {...register('bio')} />

            <FormAnnotation size={'sm'}>
              Fale um pouco sobre você. Isto será exibido na sua página pessoal.
            </FormAnnotation>
          </label>

          <Button type="submit" disabled={isSubmitting}>
            Finalizar
            <ArrowRight />
          </Button>
        </ProfileBox>
      </Container>
    </>
  )
}

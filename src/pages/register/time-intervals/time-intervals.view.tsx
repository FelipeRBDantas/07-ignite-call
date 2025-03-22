import { NextSeo } from 'next-seo'

import { ArrowRight } from 'phosphor-react'

import { Controller } from 'react-hook-form'

import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@feliperbdantas-ignite-ui/react'

import { useTimeIntervalsModel } from './time-intervals.model'

import { Container, Header } from '../../../app/views/register/styles'

import {
  FormError,
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from './styles'

type TimeIntervalsProps = ReturnType<typeof useTimeIntervalsModel>

export const TimeIntervalsView = (props: TimeIntervalsProps) => {
  const {
    handleSetTimeIntervals,
    handleSubmit,
    fields,
    weekDays,
    register,
    control,
    intervals,
    isSubmitting,
    errors,
  } = props

  return (
    <>
      <NextSeo title="Selecione sua disponibilidade | Ignite Call" noindex />

      <Container>
        <Header>
          <Heading as={'strong'}>Quase lá</Heading>

          <Text>
            Defina o intervalo de horários que você está disponível em cada dia
            da semana.
          </Text>

          <MultiStep size={4} currentStep={2} />
        </Header>

        <IntervalBox
          as={'form'}
          onSubmit={handleSubmit(handleSetTimeIntervals)}
        >
          <IntervalsContainer>
            {fields.map((field, index) => {
              return (
                <IntervalItem key={field.id}>
                  <IntervalDay>
                    <Controller
                      control={control}
                      name={`intervals.${index}.enabled`}
                      render={({ field }) => {
                        return (
                          <Checkbox
                            onCheckedChange={(checked) => {
                              field.onChange(checked === true)
                            }}
                            checked={field.value}
                          />
                        )
                      }}
                    />

                    <Text>{weekDays[field.weekDay]}</Text>
                  </IntervalDay>

                  <IntervalInputs>
                    <TextInput
                      size={'sm'}
                      type="time"
                      step={60}
                      disabled={intervals[index]?.enabled === false}
                      {...register(`intervals.${index}.startTime`)}
                    />

                    <TextInput
                      size={'sm'}
                      type="time"
                      step={60}
                      disabled={intervals[index]?.enabled === false}
                      {...register(`intervals.${index}.endTime`)}
                    />
                  </IntervalInputs>
                </IntervalItem>
              )
            })}
          </IntervalsContainer>

          {errors.intervals && (
            <FormError size={'sm'}>{errors.intervals.root?.message}</FormError>
          )}

          <Button type="submit" disabled={isSubmitting}>
            Proximo passo
            <ArrowRight />
          </Button>
        </IntervalBox>
      </Container>
    </>
  )
}

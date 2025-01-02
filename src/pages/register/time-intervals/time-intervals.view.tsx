import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@feliperbdantas-ignite-ui/react'

import { ArrowRight } from 'phosphor-react'

import { useTimeIntervalsModel } from './time-intervals.model'

import { Container, Header } from '../styles'

import {
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from './styles'

type TimeIntervalsProps = ReturnType<typeof useTimeIntervalsModel>

export const TimeIntervalsView = (props: TimeIntervalsProps) => {
  const { handleSetTimeIntervals, handleSubmit, fields, weekDays, register } =
    props

  return (
    <Container>
      <Header>
        <Heading as={'strong'}>Quase lá</Heading>

        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <IntervalBox as={'form'} onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalsContainer>
          {fields.map((field, index) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Checkbox />

                  <Text>{weekDays[field.weekDay]}</Text>
                </IntervalDay>

                <IntervalInputs>
                  <TextInput
                    size={'sm'}
                    type="time"
                    step={60}
                    {...register(`intervals.${index}.startTime`)}
                  />

                  <TextInput
                    size={'sm'}
                    type="time"
                    step={60}
                    {...register(`intervals.${index}.endTime`)}
                  />
                </IntervalInputs>
              </IntervalItem>
            )
          })}
        </IntervalsContainer>

        <Button type="submit">
          Proximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}

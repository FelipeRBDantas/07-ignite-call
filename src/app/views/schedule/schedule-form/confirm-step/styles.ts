import { styled, Box, Text } from '@feliperbdantas-ignite-ui/react'

export const ConfirmForm = styled(Box, {
  maxWidth: 540,
  margin: '$6 0 auto',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const FormHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  paddingTop: '$6',
  marginBottom: '$2',
  borderBottom: '1px solid $gray600',

  [`> ${Text}`]: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',

    svg: {
      color: '$ignite300',
      width: '$5',
      height: '$5',
    },
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
})

export const FormActions = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$2',

  marginTop: '$2',
})

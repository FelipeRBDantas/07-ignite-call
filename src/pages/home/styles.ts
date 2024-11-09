import { Heading, styled, Text } from '@feliperbdantas-ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  marginLeft: 'auto',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',

  '@media(max-width: 768px)': {
    flexDirection: 'column',
    padding: '0 $4',
  },
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`> ${Heading}`]: {
    '@media(max-width: 768px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  padding: '$8',
  overflow: 'hidden',

  '@media(max-width: 768px)': {
    display: 'none',
  },

  '@media(min-width: 768px)': {
    border: '1px solid $gray600',
    borderRadius: '$md',
  },

  img: {
    objectFit: 'cover',
  },
})

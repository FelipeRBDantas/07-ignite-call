import { styled } from '@feliperbdantas-ignite-ui/react'

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

export const Hero = styled('div', {})

export const Preview = styled('div', {})

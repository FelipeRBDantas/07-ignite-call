import { globalStyles } from '@feliperbdantas-ignite-ui/react';

export const globalStyles = globalStyles({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
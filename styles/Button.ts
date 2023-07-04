import { styled } from '.'

export const Button = styled('button', {
  padding: '10px 20px',
  backgroundColor: 'rgba(80, 80, 80, 0.16)',
  border: 0,
  fontSize: '19px',
  borderRadius: '12px',

  '&:hover': {
    backgroundColor: 'rgba(80, 80, 80, 0.30)',
  },

  '@media (max-width: 600px)': {
    padding: '8px 16px',
    fontSize: '$small',
  },

  '@media (max-width: 400px)': {
    padding: '6px 12px',
    fontSize: '$extraSmall',
  },
})

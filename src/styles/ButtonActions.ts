import { styled } from '.'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '2.5rem',
})

export const Button = styled('button', {
  display: 'flex',
  marginBottom: '1rem',
  justifyContent: 'center',
  width: '80%',
  alignItems: 'center',
  padding: '12px 10px',
  backgroundColor: 'rgba(7, 6, 6, 0.63 )',
  border: 0,
  borderRadius: '12px',
  fontWeight: 'bold',
  fontSize: '16px',
  color: '$gray100',

  '&:hover': {
    backgroundColor: 'rgba(80, 80, 80, 0.30)',
  },
})

export const Title = styled('text', {})

export const Icon = styled('span', {
  marginRight: '1rem',
})

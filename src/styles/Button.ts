import { styled } from '.'

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '47%',
  padding: '10px',
  backgroundColor: 'rgba(7, 6, 6, 0.63 )',
  border: 0,
  borderRadius: '12px',
  fontWeight: 'bold',
  fontSize: '16px',
  color: '$gray200',
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: 'rgba(80, 80, 80, 0.30)',
  },
})

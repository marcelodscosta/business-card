import { styled } from '.'

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  padding: '10px 120px',
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

  '@media (max-width: 820px)': {
    padding: '10px 105px',
    fontSize: '12px',
  },

  '@media (max-width: 600px)': {
    padding: '8px 45px',
  },

  '@media (max-width: 414px)': {
    padding: '4px 30px',
  },

  '@media (max-width: 400px)': {
    padding: '4px 20px',
  },

  '@media (max-width: 280px)': {
    padding: '4px 8px',
  },
})

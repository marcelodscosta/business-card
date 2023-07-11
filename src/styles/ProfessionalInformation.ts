import { styled } from '.'

export const Container = styled('div', {
  display: 'grid',
  alignContent: 'center',
  justifyItems: 'center',
  marginTop: '2rem',
})

export const Title = styled('text', {
  marginTop: '12px',
  fontSize: '1.3rem',
  fontWeight: 'bold',
})

export const CompanyInfo = styled('text', {
  fontSize: '0.8rem',
  marginTop: '0.4rem',
  fontWeight: 'bold',
})
export const Icon = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const Localization = styled('text', {
  fontWeight: 'bold',
  marginTop: '0.4rem',
  marginLeft: '0.2rem',
  fontSize: '1rem',
})

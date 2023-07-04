import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$primary',
  borderRadius: 8,
  padding: '8px 6px',
  border: 0,

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})

const H1 = styled('h1', {
  fontFamily: 'roboto',
  fontWeight: 'normal',
})

export default function Home() {
  return (
    <div>
      <H1>Entendo as fontes</H1>
      <Button onClick={() => alert('Teste')}>Hello World</Button>
    </div>
  )
}

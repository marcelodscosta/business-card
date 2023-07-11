import { styled } from '..'

const urlImage =
  'https://images.unsplash.com/photo-1659876096704-25201648c680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'

export const HomeContainer = styled('main', {
  display: 1,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${urlImage})`,
  position: 'relative',
  backgroundSize: 'cover',
})

export const WraperHeaderButtons = styled('div', {
  display: 'flex',
  width: '100%',
  paddingTop: '1rem',
  justifyContent: 'space-evenly',
})

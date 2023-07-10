import { styled } from '..'

const urlImage =
  'https://images.unsplash.com/photo-1521106047354-5a5b85e819ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80'

export const HomeContainer = styled('main', {
  display: 1,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${urlImage})`,
  // opacity: 0.6,
  position: 'relative',
  backgroundSize: 'cover',
})
export const WraperHeaderButtons = styled('div', {
  display: 'flex',
  width: '100%',
  paddingTop: '1rem',
  justifyContent: 'space-evenly',
})

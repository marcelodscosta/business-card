import { styled } from '@stitches/react'

export const ModalContainer = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
})

export const ModalContent = styled('div', {
  backgroundColor: 'white',
  padding: '16px',
  borderRadius: '4px',
})

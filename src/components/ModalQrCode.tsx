import CloseSvg from '../assets/x-circle.svg'
import { ModalContainer, ModalContent } from '../styles/ModalQrCode'
import { IconButton } from './IconButton'

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <ModalContainer>
      <ModalContent>
        {children}
        <IconButton
          title="Fechar"
          icon={CloseSvg}
          style={{
            width: '100%',
            backgroundColor: 'gray',
            color: '#181716',
            justifyContent: 'center',
          }}
          onClick={onClose}
        />
      </ModalContent>
    </ModalContainer>
  )
}

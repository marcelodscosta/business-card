import { blackA, mauve, violet } from '@radix-ui/colors'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'
import { ButtonHTMLAttributes } from 'react'
import { IconButton as ButtonImpo } from '../components/IconButton'
import { keyframes, styled } from '../styles'
import { QrCodeShareContact } from './QrCodeShareContact'

type IconButtonProps = {
  title: string
  icon: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const DialogModal = ({ title, icon }: IconButtonProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <ButtonImpo title={title} icon={icon} />
    </Dialog.Trigger>
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogDescription></DialogDescription>
        <QrCodeShareContact url="https://business-card-two-kappa.vercel.app/" />
        <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild></Dialog.Close>
        </Flex>
        <Dialog.Close asChild>
          <IconButton aria-label="Close">
            <Cross1Icon />
          </IconButton>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>
)

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

const DialogContent = styled(Dialog.Content, {
  display: 'flex',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
})

const DialogDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
})

const Flex = styled('div', { display: 'flex' })

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray900',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: violet.violet4 },
  '&:focus': { boxShadow: `0 0 0 2px ${`$gray900`}` },
})

import Image from 'next/image'
import { Button, Icon, Title } from '../styles/ButtonActions'

type ButtonActionProps = {
  icon?: any
  title: string
}

export const ButtonActions = ({ icon, title }: ButtonActionProps) => {
  return (
    <Button>
      <Icon>
        <Image src={icon} alt="contact" />
      </Icon>
      <Title>{title}</Title>
    </Button>
  )
}

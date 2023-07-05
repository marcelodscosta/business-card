import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'
import { Button, Icon, Title } from '../styles/ButtonActions'

type ButtonActionProps = {
  icon?: any
  title: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonActions = ({ icon, title, ...rest }: ButtonActionProps) => {
  return (
    <Button {...rest}>
      <Icon>
        <Image src={icon} alt="contact" />
      </Icon>
      <Title>{title}</Title>
    </Button>
  )
}

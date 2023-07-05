import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'
import { Button } from '../styles/Button'

type IconButtonProps = {
  title: string
  icon: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton = ({ title, icon, ...rest }: IconButtonProps) => {
  return (
    <Button {...rest}>
      <Image src={icon} alt="icon" style={{ marginRight: 12 }} />
      {title}
    </Button>
  )
}

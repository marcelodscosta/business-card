import Image from 'next/image'
import { Button } from '../styles/Button'

type IconButtonProps = {
  title: string
  icon: string
}

export const IconButton = ({ title, icon }: IconButtonProps) => {
  return (
    <Button>
      <Image src={icon} alt="icon" style={{ marginRight: 12 }} />
      {title}
    </Button>
  )
}

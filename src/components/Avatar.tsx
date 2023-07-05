import Image, { StaticImageData } from 'next/image'
import { AvatarContainer } from '../styles/AvatarContainer'

type AvatarProps = {
  img: StaticImageData
}

export const Avatar = ({ img }: AvatarProps) => {
  return (
    <AvatarContainer>
      <Image
        src={img}
        alt="img-perfil"
        width={120}
        style={{ borderRadius: '50%' }}
      />
    </AvatarContainer>
  )
}

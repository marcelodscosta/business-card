import Image, { StaticImageData } from 'next/image'
import { AvatarContainer } from '../styles/AvatarContainer'

type AvatarProps = {
  img: StaticImageData
  width?: number
}

export const Avatar = ({ img, width }: AvatarProps) => {
  return (
    <AvatarContainer>
      <Image
        src={img}
        alt="img-perfil"
        width={width || 120}
        style={{ borderRadius: '50%', border: '2px solid #fff' }}
      />
    </AvatarContainer>
  )
}

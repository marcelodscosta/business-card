import FotoPerfil from '../assets/perfil.png'
import QrCodeSvg from '../assets/qr-code.svg'
import ShareSvg from '../assets/share-network.svg'
import { Avatar } from '../components/Avatar'
import { IconButton } from '../components/IconButton'
import { HomeContainer, WraperHeaderButtons } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <WraperHeaderButtons>
        <IconButton icon={QrCodeSvg} title="QrCode" />
        <IconButton icon={ShareSvg} title="Compartilhar" />
      </WraperHeaderButtons>
      <Avatar img={FotoPerfil} />
    </HomeContainer>
  )
}

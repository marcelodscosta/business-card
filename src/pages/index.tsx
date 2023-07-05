import AddressSvg from '../assets/address-book.svg'
import PixSvg from '../assets/cardholder.svg'
import WebSiteSvg from '../assets/globe.svg'
import InstagranSvg from '../assets/instagram-logo.svg'
import LinkedinSvg from '../assets/linkedin-logo.svg'
import EmailSvg from '../assets/microsoft-outlook-logo.svg'
import FotoPerfil from '../assets/perfil.png'
import CallSvg from '../assets/phone-outgoing.svg'
import QrCodeSvg from '../assets/qr-code.svg'
import ShareSvg from '../assets/share-network.svg'
import WhatsAppSvg from '../assets/whatsapp-logo.svg'
import { Avatar } from '../components/Avatar'
import { ButtonActions } from '../components/ButtonActions'
import { IconButton } from '../components/IconButton'
import { ProfessionalInformation } from '../components/ProfessionalInformation'
import { Container } from '../styles/ButtonActions'
import { HomeContainer, WraperHeaderButtons } from '../styles/pages/home'
import { handleEmailClick } from '../utils/emailAppClick'
import { handleLinksAppClick } from '../utils/linksAppClick'
import { handleWhatsAppClick } from '../utils/whatsAppClick'

export default function Home() {
  return (
    <HomeContainer>
      <WraperHeaderButtons>
        <IconButton icon={QrCodeSvg} title="QrCode" />
        <IconButton icon={ShareSvg} title="Compartilhar" />
      </WraperHeaderButtons>

      <Avatar img={FotoPerfil} />

      <ProfessionalInformation />

      <WraperHeaderButtons>
        <IconButton icon={AddressSvg} title="Salvar Contato" />
        <IconButton icon={CallSvg} title="Ligar" />
      </WraperHeaderButtons>

      <Container>
        <ButtonActions
          onClick={() => handleWhatsAppClick({ phoneNumber: '5575981238271' })}
          icon={WhatsAppSvg}
          title="WhatsApp"
        />
        <ButtonActions
          onClick={() =>
            handleLinksAppClick({
              url: 'https://www.instagram.com/leondinis_andrade/',
            })
          }
          icon={InstagranSvg}
          title="Instagram"
        />
        <ButtonActions
          onClick={() =>
            handleLinksAppClick({ url: 'https://dmzsolucoes.com.br/' })
          }
          icon={WebSiteSvg}
          title="Site"
        />
        <ButtonActions
          onClick={() =>
            handleLinksAppClick({ url: 'https://www.linkedin.com/' })
          }
          icon={LinkedinSvg}
          title="Linkedin"
        />
        <ButtonActions
          onClick={() =>
            handleEmailClick({ email: 'contato@dmzsolucoes.com.br' })
          }
          icon={EmailSvg}
          title="Email"
        />
        <ButtonActions icon={PixSvg} title="Pix" />
      </Container>
    </HomeContainer>
  )
}

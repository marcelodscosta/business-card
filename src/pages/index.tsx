import { useState } from 'react'
import AddressSvg from '../assets/address-book.svg'
import PixSvg from '../assets/cardholder.svg'
import WebSiteSvg from '../assets/globe.svg'
import InstagranSvg from '../assets/instagram-logo.svg'
import LinkedinSvg from '../assets/linkedin-logo.svg'
import EmailSvg from '../assets/microsoft-outlook-logo.svg'
import FotoPerfil from '../assets/perfil.png'
import QrCodeSvg from '../assets/qr-code.svg'
import ShareSvg from '../assets/share-network.svg'
import WhatsAppSvg from '../assets/whatsapp-logo.svg'
import { Avatar } from '../components/Avatar'
import { ButtonActions } from '../components/ButtonActions'
import { IconButton } from '../components/IconButton'
import { Modal } from '../components/ModalQrCode'
import { ProfessionalInformation } from '../components/ProfessionalInformation'
import { QrCodeShareContact } from '../components/QrCodeShareContact'
import { Container } from '../styles/ButtonActions'
import { HomeContainer, WraperHeaderButtons } from '../styles/pages/home'
import { createContactLink } from '../utils/createContact'
import { handleEmailClick } from '../utils/emailAppClick'
import { handleLinksAppClick } from '../utils/linksAppClick'
import { handleWhatsAppClick } from '../utils/whatsAppClick'
import { handleWhatsAppShare } from '../utils/whatsAppShare'

const contact = {
  name: 'Leodines Andrade Junior',
  phone: '075981238271',
  email: 'contato@dmzsolucoes.com.br',
  company: 'DMZ Soluções',
  street: 'Queimadinha',
  city: 'Feira de Santana',
  state: 'Bahia',
  zipCode: '44050-000',
  country: 'Brasil',
  website: 'https://www.dmzsolucoes.com.br',
  photo: 'https://avatars.githubusercontent.com/u/81534727?v=4',
  jobTitle: 'CEO',
  notes: 'Desenvolvimento FullStack',
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <HomeContainer>
      <WraperHeaderButtons>
        <IconButton onClick={openModal} icon={QrCodeSvg} title="QrCode" />
        <IconButton
          onClick={() =>
            handleWhatsAppShare({
              text: contact.website,
              url: '',
            })
          }
          icon={ShareSvg}
          title="Compartilhar"
        />
      </WraperHeaderButtons>

      <Avatar img={FotoPerfil} />

      <ProfessionalInformation
        name={contact.name}
        job={contact.jobTitle}
        company={contact.company}
        city={contact.city}
        state={contact.state}
      />

      <Container>
        <ButtonActions
          onClick={() => createContactLink({ contact })}
          icon={AddressSvg}
          title="Salvar contato"
        />
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
      <Modal isOpen={isOpen} onClose={closeModal}>
        <QrCodeShareContact url="http://192.168.0.105:3000/" />
      </Modal>
    </HomeContainer>
  )
}

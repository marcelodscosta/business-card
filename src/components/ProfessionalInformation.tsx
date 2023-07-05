import {
  CompanyInfo,
  Container,
  Icon,
  Localization,
  Title,
} from '../styles/ProfessionalInformation'

import Image from 'next/image'
import MapPin from '../assets/map-pin.svg'

export const ProfessionalInformation = () => {
  return (
    <Container>
      <Title>Leodines Andrade Junior</Title>
      <CompanyInfo>Co-fundador DMZ Soluçõs</CompanyInfo>
      <Icon>
        <Image
          src={MapPin}
          alt="localization"
          style={{ borderColor: '#fff' }}
        />
        <Localization>Feira de Santana/Bahia</Localization>
      </Icon>
    </Container>
  )
}

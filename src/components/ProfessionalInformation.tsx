import {
  CompanyInfo,
  Container,
  Icon,
  Localization,
  Title,
} from '../styles/ProfessionalInformation'

import Image from 'next/image'
import MapPin from '../assets/map-pin.svg'

type ProfessionalInformationProps = {
  name: string
  job: string
  company: string
  city: string
  state: string
}

export const ProfessionalInformation = ({
  name,
  job,
  company,
  city,
  state,
}: ProfessionalInformationProps) => {
  return (
    <Container>
      <Title>{name}</Title>
      <CompanyInfo>{`${job} - ${company}`}</CompanyInfo>
      <Icon>
        <Image
          src={MapPin}
          alt="localization"
          style={{ borderColor: '#fff' }}
        />
        <Localization>{`${city}/${state}`}</Localization>
      </Icon>
    </Container>
  )
}

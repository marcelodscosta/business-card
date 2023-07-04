import { Button } from '../styles/Button'
import { HomeContainer, WraperHeaderButtons } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <WraperHeaderButtons>
        <Button>Qr Code</Button>
        <Button>Compartilhar</Button>
      </WraperHeaderButtons>
    </HomeContainer>
  )
}

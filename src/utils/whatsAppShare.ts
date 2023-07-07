import queryString from 'query-string'

type handleWhatsAppShareProps = {
  url: string
  text: string
}

export const handleWhatsAppShare = ({
  url,
  text,
}: handleWhatsAppShareProps) => {
  const params = {
    url,
    text,
  }

  const queryParam = queryString.stringify(params)
  const whatsappLink = `https://api.whatsapp.com/send?${queryParam}`

  window.open(whatsappLink, '_blank')
}

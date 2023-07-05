type WhatsAppButtonProps = {
  phoneNumber: string
}

export const handleWhatsAppClick = ({
  phoneNumber = '5574981316568',
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`
  window.open(whatsappUrl, '_blank')
}

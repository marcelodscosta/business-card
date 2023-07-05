type WhatsAppButtonProps = {
  phoneNumber: string
}

export const handleWhatsAppClick = ({ phoneNumber }: WhatsAppButtonProps) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`
  window.open(whatsappUrl, '_blank')
}

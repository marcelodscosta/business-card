type handleMakeCallProps = {
  phone: string
}

export const handleMakeCall = ({ phone }: handleMakeCallProps) => {
  return (window.location.href = `tel:${phone}`)
}

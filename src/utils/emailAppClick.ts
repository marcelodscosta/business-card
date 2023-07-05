type handleEmailClickProps = {
  email: string
}

export const handleEmailClick = ({ email }: handleEmailClickProps) => {
  window.location.href = `mailto:${email}?subject=Assunto do email&body=Corpo do email`
}

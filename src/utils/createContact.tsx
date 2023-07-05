export function createContactLink(name: string, phoneNumber: string): string {
  const contactData = `BEGIN:VCARD\nVERSION:3.0\nN:${name}\nTEL:${phoneNumber}\nEND:VCARD`
  const encodedData = encodeURIComponent(contactData)
  return `data:text/vcard;charset=utf-8,${encodedData}`
}

interface ContactLinkProps {
  name: string
  phoneNumber: string
}

export const ContactLink = ({ name, phoneNumber }: ContactLinkProps) => {
  const link = createContactLink(name, phoneNumber)

  return (
    <a href={link} target="_blank" rel="noreferrer">
      Salvar contato
    </a>
  )
}

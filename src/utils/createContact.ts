type ContactData = {
  contact: {
    name: string
    phone: string
    email: string
    company: string
    address: string
    website: string
    photo: string
  }
}

export const createContactLink = ({ contact }: ContactData) => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  ) {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
TEL;TYPE=CELL:${contact.phone}
EMAIL:${contact.email}
ORG:${contact.company}
ADR:${contact.address}
URL:${contact.website}
PHOTO;VALUE=URL:${contact.photo}
END:VCARD
`.trim()

    const vCardUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(
      vCardData,
    )}`
    window.location.href = vCardUrl
  } else {
    alert('Esta funcionalidade está disponível apenas em dispositivos móveis.')
  }
}

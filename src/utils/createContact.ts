type ContactData = {
  contact: {
    name: string
    phone: string
    email: string
    company: string
    street: string
    city: string
    state: string
    zipCode: string
    country: string
    website: string
    photo: string
    jobTitle: string
    notes: string
  }
}

export const createContactLink = ({ contact }: ContactData) => {
  const {
    name,
    phone,
    email,
    company,
    street,
    city,
    state,
    zipCode,
    country,
    website,
    photo,
    jobTitle,
    notes,
  } = contact

  const address = `${street}, ${city}, ${state} ${zipCode}, ${country}`

  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:${phone}
EMAIL:${email}
ORG:${company}
ADR;TYPE=WORK,PREF:;;${address}
URL:${website}
PHOTO;ENCODING=b;TYPE=JPEG:${photo}
TITLE:${jobTitle}
NOTE:${notes}
END:VCARD
`.trim()

  const vCardUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(
    vCardData,
  )}`

  window.location.href = vCardUrl
}

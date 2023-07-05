export function createContactLink(name: string, phoneNumber: string): string {
  const contactData = `BEGIN:VCARD\nVERSION:3.0\nN:${name}\nTEL:${phoneNumber}\nEND:VCARD`
  const encodedData = encodeURIComponent(contactData)
  return `data:text/vcard;charset=utf-8,${encodedData}`
}

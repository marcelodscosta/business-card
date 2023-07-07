import Image from 'next/image'

type QrCodeShareContactProps = {
  url: string
}

export const QrCodeShareContact = ({ url }: QrCodeShareContactProps) => {
  const qrCode = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${url}`

  return (
    <div>
      <Image src={qrCode} alt="QR Code" width={300} height={300} />
    </div>
  )
}

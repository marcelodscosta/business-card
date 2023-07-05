type LinksAppButtonProps = {
  url: string
}

export const handleLinksAppClick = ({ url }: LinksAppButtonProps) => {
  window.open(url, '_blank')
}

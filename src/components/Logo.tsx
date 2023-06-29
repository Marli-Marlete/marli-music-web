import Image from 'next/image'

export function Logo() {
  return (
    <Image
      src="/images/logo.jpg"
      height={144}
      width={144}
      alt="Marli Music Logo"
    />
  )
}
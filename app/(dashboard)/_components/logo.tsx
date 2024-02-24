import Image from 'next/image';

export const Logo = () => {
          return (
                    <Image
                    priority={true}
                    height={100}
                    width={100}
                    alt="logo"
                    src="/logo.svg"
                    />
          )
}


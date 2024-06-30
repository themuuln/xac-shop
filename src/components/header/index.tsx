import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonType = {
  children: ReactNode;
  isActive?: boolean;
};
const Button = ({ children, isActive }: ButtonType) => {
  return (
    <Link href={`/#${children!.toString().toLowerCase()}`}>
      <button
        className={`p-2 text-lg leading-[120%] ${isActive ? 'text-text' : 'text-light-gray'}`}
      >
        {children}
      </button>
    </Link>
  );
};

const headerData = [
  { label: 'Home' },
  { label: 'Features' },
  { label: 'Testimonials' },
  { label: 'Shop' },
];

const Header = () => {
  return (
    <header className="container sticky top-0 z-10 flex flex-row items-center bg-background/50 backdrop-blur md:justify-between">
      {/* Logo */}
      <Link href={'/'}>
        <div className="p-4">
          <Image
            alt="header-logo"
            src={'/assets/logo/logo.png'}
            width={48}
            height={48}
          />
        </div>
      </Link>
      <div className="flex space-x-3 py-5 ">
        {headerData.map((x, index) => {
          return (
            <Button isActive={true} key={index}>
              {x.label}
            </Button>
          );
        })}
      </div>
      {/* Menu */}
      <div></div>
    </header>
  );
};

export default Header;

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
    <header className="sticky top-0 z-10 flex flex-row bg-background/50 backdrop-blur md:justify-between">
      {/* Logo */}
      <div></div>
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

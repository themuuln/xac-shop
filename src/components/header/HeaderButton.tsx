import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonType = {
  children: ReactNode;
  isActive?: boolean;
  href: string;
};

export const Button = ({ children, isActive, href }: ButtonType) => (
  <Link href={href}>
    <button
      className={`p-2 text-lg leading-[120%] ${isActive ? 'text-text' : 'text-light-gray'}`}
    >
      {children}
    </button>
  </Link>
);

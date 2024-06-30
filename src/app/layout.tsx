import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Header } from '@/components';
import { ReactLenis } from '@/lib/lenis';

export const metadata: Metadata = {
  title: 'Xac Watch Shop',
  description: 'Code by @themuuln',
};

const clashGrotesk = localFont({
  src: [
    {
      path: '../../public/assets/fonts/ClashGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/ClashGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/ClashGrotesk-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/ClashGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body className={`${clashGrotesk.className} bg-background`}>
          <Header />
          {children}
        </body>
      </html>
    </ReactLenis>
  );
}

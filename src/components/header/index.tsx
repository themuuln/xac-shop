import { headerData } from '@/data/header';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './HeaderButton';

const Header = () => {
  return (
    <header className='container sticky top-0 z-10 flex flex-row items-center bg-background/50 backdrop-blur md:justify-between'>
      {/* Logo */}
      <Link href={'/'}>
        <div className='p-4'>
          <Image
            alt='header-logo'
            src={'/assets/logo/logo.png'}
            width={48}
            height={48}
          />
        </div>
      </Link>
      <div className='flex space-x-3 py-5 '>
        {headerData.map((x, index) => (
          <Button href={x.href} isActive={true} key={index}>
            {x.label}
          </Button>
        ))}
      </div>
      {/* Menu */}
      <div></div>
    </header>
  );
};

export default Header;

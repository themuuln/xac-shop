import { Button, Container } from '@/components';
import FeatureCard from '@/components/features/card';
import Image from 'next/image';
import data from '../data/home';

export default function Home() {
  return (
    <Container>
      {/* Landing */}
      <section className='min-h-screen py-20 flex'>
        <div className='bg-white items-center justify-between flex rounded-3xl min-w-full'>
          <div className='w-full flex justify-center'>
            <div className='space-y-20'>
              <div className='space-y-6 max-w-[500px]'>
                <h3>Discover the Latest Watch Collections for Men</h3>
                <h6>Elevate your style with our premium selection of men&apos;s watches and accessories.</h6>
              </div>
              <div className='flex flex-row gap-3'>
                <Button>Explore</Button>
                <Button variant={'outline'}>Shop</Button>
              </div>
            </div>
          </div>
          <Image src='/watches/datejust-aqua.png' alt='watch' className='object-contain' width={400} height={538.46} />
        </div>
      </section>

      {/* Features */}
      <section className='min-h-screen flex items-center py-20'>
        <div className='flex flex-col space-y-8 items-center'>
          <div className='flex justify-between flex-row'>
            {data.features.map((x, index) => {
              return <FeatureCard key={index} img={x.img} title={x.title} description={x.description} />;
            })}
          </div>
          <div className='flex flex-row gap-3'>
            <Button>Shop</Button>
            <Button variant={'link'}>Learn more</Button>
          </div>
        </div>
      </section>
    </Container>
  );
}

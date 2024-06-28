'use client';

import { Button, Container } from '@/components';
import FeatureCard from '@/components/features/card';
import Image from 'next/image';
import data from '../data/home';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import TestimonialIndicator from '@/components/testimonial/Indicator';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
          <div className='space-y-3 flex flex-col items-center'>
            <p>Quality</p>
            <h3>Discover Our Stylish and Reliable Watches</h3>
            <h6 className='lg:max-w-[780px] text-center'>
              Our watches combine style and durability, with features like water resistance and a variety of styles to choose from. Plus, they come
              with a warranty for peace of mind.
            </h6>
          </div>
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

      {/* Testimonials */}
      <section className='min-h-[60%] flex flex-col justify-center items-center py-20'>
        <div className='flex-col flex space-y-16'>
          <Carousel setApi={setApi} className='w-[768px] max-w-full'>
            <CarouselContent>
              {data.testimonial.map((x, index) => (
                <CarouselItem className='w-[768px]' key={index}>
                  <div key={index} className='flex space-y-9 flex-col min-w-[768px] items-center'>
                    <h5 className='font-medium text-center'>{x.review}</h5>
                    <div className='space-y-2 flex flex-col items-center'>
                      <Avatar className='w-16 h-16'>
                        <AvatarImage src='https://avatars.githubusercontent.com/u/75017829?v=4' alt={`testimonial_${index}`} />
                        <AvatarFallback>TM</AvatarFallback>
                      </Avatar>
                      <h5 className='text-center'>{x.name}</h5>
                      <p>{x.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <TestimonialIndicator setActiveIndex={setCurrent} data={data.testimonial} activeIndex={current - 1} />
        </div>
      </section>

      <section className='min-h-screen flex items-center py-20'></section>
    </Container>
  );
}

'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button, Container } from '@/components';
import FeatureCard from '@/components/features/card';
import TestimonialIndicator from '@/components/testimonial/Indicator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import data from '../data/home';

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Container>
      {/* Landing */}
      <section id="home" className="flex min-h-[calc(100vh-78px)] py-20">
        <div className="flex min-w-full items-center justify-between rounded-3xl bg-white md:px-16">
          <div className="flex w-full justify-center">
            <div className="space-y-20">
              <div className="max-w-[500px] space-y-6">
                <h3>Discover the Latest Watch Collections for Men</h3>
                <h6>
                  Elevate your style with our premium selection of men&apos;s
                  watches and accessories.
                </h6>
              </div>
              <div className="flex flex-row gap-3">
                <Link href={'/explore'}>
                  <Button>Explore</Button>
                </Link>
                <Link href={'/shop'}>
                  <Button variant={'outline'}>Shop</Button>
                </Link>
              </div>
            </div>
          </div>
          <Image
            src="/watches/datejust-aqua.png"
            alt="watch"
            className="object-contain"
            width={400}
            height={538.46}
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="flex min-h-screen items-center  py-20">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-col items-center space-y-3">
            <p>Quality</p>
            <h3>Discover Our Stylish and Reliable Watches</h3>
            <h6 className="text-center lg:max-w-[780px]">
              Our watches combine style and durability, with features like water
              resistance and a variety of styles to choose from. Plus, they come
              with a warranty for peace of mind.
            </h6>
          </div>
          <div className="flex flex-row justify-between">
            {data.features.map((x, index) => {
              return (
                <FeatureCard
                  key={index}
                  img={x.img}
                  title={x.title}
                  description={x.description}
                />
              );
            })}
          </div>
          <div className="flex flex-row gap-3">
            <Link href={'/shop'}>
              <Button>Shop</Button>
            </Link>
            <Button variant={'link'}>Learn more</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="flex min-h-[60%] flex-col items-center justify-center py-20"
      >
        <div className="flex flex-col space-y-16">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3500,
              }),
            ]}
            setApi={setApi}
            className="w-[768px] max-w-full"
          >
            <CarouselContent>
              {data.testimonial.map((x, index) => (
                <CarouselItem className="w-[768px]" key={index}>
                  <div
                    key={index}
                    className="flex min-w-[768px] flex-col items-center space-y-9"
                  >
                    <h5 className="select-none text-center font-medium">
                      {x.review}
                    </h5>
                    <div className="flex flex-col items-center space-y-2">
                      <Avatar className="size-16">
                        <AvatarImage
                          src="https://avatars.githubusercontent.com/u/75017829?v=4"
                          alt={`testimonial_${index}`}
                        />
                        <AvatarFallback>TM</AvatarFallback>
                      </Avatar>
                      <h5 className="select-none text-center">{x.name}</h5>
                      <p className="select-none">{x.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <TestimonialIndicator
            setActiveIndex={setCurrent}
            data={data.testimonial}
            activeIndex={current - 1}
          />
        </div>
      </section>

      <section
        id="shop"
        className="flex min-h-screen items-center py-20"
      ></section>
    </Container>
  );
}

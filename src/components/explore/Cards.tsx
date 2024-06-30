import Image from 'next/image';
import Link from 'next/link';

import { formatNumberWithCommas } from '@/utils/helpers';

import Button from '../ui/button';
import { Card, CardContent } from '../ui/card';

type CardProps = {
  item: {
    name: string;
    model: number;
    condition: string;
    gender: string;
    movement: string;
    case: string;
    _id: number;
    price: number;
    currency: string;
    image: string;
  };
};

const Cards = ({ item }: CardProps) => {
  return (
    <Card className="">
      <Link
        className="flex w-full flex-col items-center justify-center space-y-8"
        href={`/watch/${item?.name}-${item?.model}`}
      >
        <Image
          src={item?.image}
          alt={`wimg_${item?.name}`}
          className="object-contain"
          width={300}
          height={300}
        />
        <CardContent className="w-full">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h5>{item?.name}</h5>

              <h6>{item?.model}</h6>
              <h6 className="font-medium">
                {formatNumberWithCommas(item?.price)}
              </h6>
            </div>
            <Button size="lg">Buy</Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default Cards;

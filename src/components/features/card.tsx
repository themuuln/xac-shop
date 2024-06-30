import Image from "next/image";

type FeatureCardProps = {
  img: string;
  title: string;
  description: string;
};

const FeatureCard = ({ img, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col space-y-6 items-center">
      <div className="w-full overflow-hidden h-[260px] justify-center flex ">
        <Image
          src={img}
          alt={title}
          className="object-contain hover:scale-110 transition-transform duration-300"
          width={385}
          height={100}
        />
      </div>
      <h2>{title}</h2>
      <h6 className="text-center">{description}</h6>
    </div>
  );
};

export default FeatureCard;

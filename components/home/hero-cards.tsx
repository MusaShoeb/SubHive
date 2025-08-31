import Image from "next/image"

type HeroCardsProps = {
    backgroundColor: string
    cardTitle : string,
    cardDescription : string,
    imageSrc: string,
    imageAlt: string, 
}

export default function HeroCards({
  backgroundColor,
  cardTitle,
  cardDescription,
  imageSrc,
  imageAlt,
}: HeroCardsProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center w-80 h-70 rounded-2xl text-white`}
      style={{ backgroundColor }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={80}
        height={80}
      />
      <div className="text-white text-[30px]">{cardTitle}</div>
      <div className="mt-5 border-t-3 w-full" />
      <div className="m-5 text-white text-[25px]">{cardDescription}</div>
    </div>
  )
}

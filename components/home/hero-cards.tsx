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
      className={`flex flex-col justify-center items-center w-9/10 h-auto p-1 rounded-2xl drop-shadow-md text-white lg:h-[40vh] lg:w-[25vw]`}
      style={{ backgroundColor }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={80}
        height={60}
        className="m-1"
      />
      <div className="text-white text-[27px] text-center">{cardTitle}</div>
      <div className="mt-5 border-t-3 w-full" />
      <div className= {`m-5 text-white text-[22px] md:text-[15px] xl:text-[22px]`}>{cardDescription}</div>
    </div>
  )
}

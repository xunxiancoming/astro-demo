import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Curousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="h-96">
          <img src="/avatar.jpeg" className="rounded-sm w-full" />
        </CarouselItem>
        <CarouselItem className="h-96">
          <img src="/bg.jpg" className="rounded-sm w-full" />
        </CarouselItem>
        <CarouselItem className="h-96">
          <img src="/favicon.svg" className="rounded-sm w-full" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

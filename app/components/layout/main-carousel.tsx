import * as React from "react";
import CardCar from "../ui/card-car";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function MainCarousel(){
    return(

      <Carousel opts={{ align: "start", slidesToScroll: 1 }} className="relative mt-10 px-4">
        <CarouselContent className="-ml-6">
            {Array.from({length:8}).map((_,i)=>(
              <CarouselItem key={i} className="pl-6 md:basis-1/4">
                <CardCar/>
              </CarouselItem>
            ))}
        </CarouselContent>

        <CarouselPrevious className="absolute  flex justify-center items-center left-0 top-1/2  mt-5 +ml-5 md:+ml-5   w-10 h-10 rounded-[30px] bg-[#fff] shadow-[0px_2px_16px_0px_#0000001A]"/>
        <CarouselNext className="absolute flex justify-center items-center right-0 top-1/2 mt-5 +mr-5 md:+mr-5 w-10 h-10 rounded-[30px] bg-[#fff] shadow-[0px_2px_16px_0px_#0000001A]"/>
      </Carousel>  
      // <div className="relative grid grid-cols-4 gap-6 mt-10">
      //       <div className="absolute  flex justify-center items-center left-0 top-1/2 +translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-[30px] bg-[#fff] shadow-[0px_2px_16px_0px_#0000001A]">
      //         <ChevronLeft className = "" strokeWidth={2} />
      //       </div>
      //       <CardCar/>
      //       <CardCar/>
      //       <CardCar/>
      //       <CardCar/>
      //       <div className="absolute flex justify-center items-center right-0 top-1/2 +translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-[30px] bg-[#fff] shadow-[0px_2px_16px_0px_#0000001A]">
      //         <ChevronRight className = ""strokeWidth={2}/>
      //       </div>
      //   </div>  
    )
}
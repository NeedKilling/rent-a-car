import CardCar from "../ui/card-car"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function CarPark(){
    return(

        <section className="px-2 md:px-12 py-15 md:py-20 bg-slate-100">
                <h2 className="font-bold text-5xl h-12 text-center md:text-left">Автопарк</h2>

                <div className="hidden md:block md:grid md:grid-cols-4 gap-6 mt-10">
                  {Array.from({length:12}, (_,i)=>(
                    <CardCar key = {i}/>
                  ))}
                </div>

                <div className="block md:hidden md:grid md:grid-cols-4 gap-6 mt-10 px-10 basis-1/2">
                    <Carousel className="w-full">
                        <CarouselContent className="">
                            {Array.from({length:12}, (_,i)=> (
                                <CarouselItem key={i} className="basis-full">
                                    <CardCar key = {i}/>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" /> */}
                    </Carousel>
                </div>


                <button className="block bg-blue-600 hover:bg-[#3B82F6] cursor-pointer  text-[#fff] mt-10 mx-auto w-[207px] h-10 rounded-[8px] ">Смотреть все</button>
        </section>
    )
}
import { 
  CircleAlert, 
  Clock, 
  Map, 
  Clipboard, 
  RefreshCcw, 
  CircleX,
  LucideIcon 
} from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type AdvantagesCard = {
  icon: LucideIcon
  title: string
  description: string
}

const Advantages: AdvantagesCard[] = [
  {
    icon: CircleAlert,
    title: "Новые автомобили",
    description: "Все наши автомобили — новейшие модели, обеспечивающие комфорт и безопасность на дорогах."
  },
  {
    icon: Clock,
    title: "Поддержка 24-часа",
    description: "Мы доступны 24/7, чтобы помочь вам в любое время дня и ночи."
  },
  {
    icon: Map,
    title: "Удобное расположение",
    description: "Наши точки аренды находятся в удобных локациях по всему городу, включая аэропорты и железнодорожные станции."
  },
  {
    icon: Clipboard,
    title: "Страховка на случай ДТП",
    description: "Каждый арендуемый автомобиль защищён страховкой от ДТП, покрывающей основные риски."
  },
  {
    icon: RefreshCcw,
    title: "Экономьте до 50% на дальних поездках",
    description: "Используйте наши специальные тарифы для длительных поездок и экономьте до 50%."
  },
  {
    icon: CircleX,
    title: "Бесплатная отмена за 48 часов",
    description: "Предоставляем возможность бесплатной отмены брони за 48 часов до начала аренды."
  }
]

function AdvantagesCardItem({ icon: Icon, title, description }: AdvantagesCard) {
  return (
    <div className="max:w-[432px] h-[300px] p-6 border-[2px] rounded-[8px] border-[#F1F5F9] shadow-[0px_1px_4px_0px_#0C0C0D0D]">
      <div className="w-10 h-10 flex justify-center items-center">
        <Icon size={40} strokeWidth={1} className="text-blue-600" />
      </div>
      <div className="w-[384px] h-[120px] mt-6">
        <h3 className="font-bold text-2xl">{title}</h3>
        <div className="text-slate-500 mt-4">{description}</div>
      </div>
    </div>
  )
}
export default function AdvantagesSectiontsx(){
    return(
        <section className="px-2 md:px-12 py-15 md:py-20">
            <h2 className="font-bold text-4xl md:text-5xl text-center mb-10">Наши преимущества</h2>
                <div className="flex flex-col  md:grid md:grid-cols-3 gap-6">

                    <div className="block md:hidden w-full">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {Advantages.map((item,i) => (
                                    <CarouselItem key={i} className="basis-full">
                                        <AdvantagesCardItem icon={item.icon} title={item.title} description={item.description}/>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {/* <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" /> */}
                        </Carousel>
                    </div>
                </div>

                <div className="hidden md:block  md:grid md:grid-cols-3 gap-6">
                    {Advantages.map((item,i)=>(
                        <AdvantagesCardItem key = {i} icon={item.icon} title={item.title} description={item.description}/>
                    ))}
                </div>
        </section>

    )
}
import Image from "next/image";
import CardCar from "./components/ui/card-car";
import { ChevronLeft, ChevronRight, CircleAlert , Clock, Map, Clipboard, RefreshCcw,   CircleX} from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section className="px-30 text-base" > 
        <div className="w-300 h-55  mt-25 text-center">
          <h1 className="relative top-[-20px]  text-[60px] font-bold h-15">Самый большой автопарк Москвы</h1>
          <div className="mt-6 h-18">Мы предлагаем аренду автомобилей, которые идеально подойдут для любых вкусов и предпочтений. У нас вы найдете авто для любой ситуации и<br/> настроения, от экономичных до роскошных моделей. Наслаждайтесь комфортом и свободой передвижения с нашей широкой линейкой транспортных средств.</div>
          <button className="relative z-10 bg-blue-600 text-[#fff] mt-6 px-4 w-[266px] py-2 rounded-[6px]">Начать пользоваться</button>
        </div>
      </section>
      
      <section className="relative z-0">
        <Image className = "mt-[25px]" src="/img/image 66.png" width={1440} height={356} alt="car"></Image>
        {/* <Image className = "absolute top-[25px]" src="/img/image 66.png" width={1440} height={356} alt="car"></Image> */}
        <Image className = "mx-auto absolute top-[-65px] left-1/2 -translate-x-1/2 " src="/img/Car Png Vector 1.png" width={1181} height={665} alt="car"></Image>
      </section>
      
      <section className="px-12 py-20 bg-slate-100">
        <h2 className="w-[1344px] h-12 font-bold text-5xl">Новые автомобили</h2>
        <div className="relative grid grid-cols-4 gap-6 mt-10">
            <div className="absolute  flex justify-center items-center left-0 top-1/2 +translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-[30px] bg-[#fff] shadow-[0px_2px_16px_0px_#0000001A]">
              <ChevronLeft className = "" strokeWidth={2} />
            </div>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <div className="absolute flex justify-center items-center right-0 top-1/2 +translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-[30px] bg-[#fff] shadow-[0px_2px_16px_0px_#0000001A]">
              <ChevronRight className = ""strokeWidth={2}/>
            </div>
        </div>  
      </section>


    <section className="px-12 py-20">
        <h2 className="font-bold text-5xl text-center ">Наши преимущества</h2>
        <div className="mt-10 grid grid-cols-3 gap-6">

            <div className="w-[432px] h-[300px] p-6 border-[2px] rounded-[8px]  border-[#F1F5F9] shadow-[0px_1px_4px_0px_#0C0C0D0D]">
              <div className="w-10 h-10 flex justify-center items-center"><CircleAlert size={33.33} strokeWidth={1} className="text-blue-600"/></div>
              <div className="w-[384px] h-[120px] mt-6">
                <h3 className="font-bold text-2xl ">Новые автомобили</h3>
                <div className="text-slate-500 mt-4">Все наши автомобили — новейшие модели, обеспечивающие комфорт и безопасность на дорогах.</div>
              </div>
            </div>
            
            <div className="w-[432px] h-[300px] p-6 border-[2px] rounded-[8px] border-[#F1F5F9] shadow-[0px_1px_4px_0px_#0C0C0D0D]">
              <div className="w-10 h-10 flex justify-center items-center"><Clock size={33.33} strokeWidth={1} className="text-blue-600"/></div>
              <div className="w-[384px] h-[120px] mt-6">
                <h3 className="font-bold text-2xl ">Поддержка 24-часа</h3>
                <div className="text-slate-500 mt-4">Мы доступны 24/7, чтобы помочь вам в любое время дня и ночи.</div>
              </div>
            </div>

            <div className="w-[432px] h-[300px] p-6 border-[2px] rounded-[8px] border-[#F1F5F9] shadow-[0px_1px_4px_0px_#0C0C0D0D]">
              <div className="w-10 h-10 flex justify-center items-center"><Map size={33.33} strokeWidth={1} className="text-blue-600"/></div>
              <div className="w-[384px] h-[120px] mt-6">
                <h3 className="font-bold text-2xl ">Удобное расположение</h3>
                <div className="text-slate-500 mt-4">Наши точки аренды находятся в удобных локациях по всему городу, включая аэропорты и железнодорожные станции.</div>
              </div>
            </div>

            <div className="w-[432px] h-[300px] p-6 border-[2px] rounded-[8px] border-[#F1F5F9] shadow-[0px_1px_4px_0px_#0C0C0D0D]">
              <div className="w-10 h-10 flex justify-center items-center"><Clipboard size={33.33} strokeWidth={1} className="text-blue-600"/></div>
              <div className="w-[384px] h-[120px] mt-6">
                <h3 className="font-bold text-2xl ">Страховка на случай ДТП</h3>
                <div className="text-slate-500 mt-4">Каждый арендуемый автомобиль защищён страховкой от ДТП, покрывающей основные риски.</div>
              </div>
            </div>

            <div className="w-[432px] h-[300px] p-6 border-[2px] rounded-[8px] border-[#F1F5F9] shadow-[0px_1px_4px_0px_#0C0C0D0D]">
              <div className="w-10 h-10 flex justify-center items-center"><RefreshCcw size={33.33} strokeWidth={1} className="text-blue-600"/></div>
              <div className="w-[384px] h-[120px] mt-6">
                <h3 className="font-bold text-2xl ">Экономьте до 50% на дальних поездках</h3>
                <div className="text-slate-500 mt-4">Используйте наши специальные тарифы для длительных поездок и экономьте до 50%.</div>
              </div>
            </div>

            <div className="w-[432px] h-[300px] p-6 border-[2px] rounded-[8px] border-[#F1F5F9] shadow-[0px_1px_4px_0px_#0C0C0D0D]">
              <div className="w-10 h-10 flex justify-center items-center"><CircleX size={33.33} strokeWidth={1} className="text-blue-600"/></div>
              <div className="w-[384px] h-[120px] mt-6">
                <h3 className="font-bold text-2xl ">Бесплатная отмена за 48 часов</h3>
                <div className="text-slate-500 mt-4">Предоставляем возможность бесплатной отмены брони за 48 часов до начала аренды.</div>
              </div>
            </div>






        </div>
    </section>


    </div>
  );
}

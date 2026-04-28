import Image from "next/image";
import CardCar from "./components/ui/card-car";
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

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

    </div>
  );
}

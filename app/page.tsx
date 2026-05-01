"use client"
import Image from "next/image";
import CardCar from "./components/ui/card-car";
import AdvantagesCard from "./components/layout/advantages-section";
import MainCarousel from "./components/layout/main-carousel";
import CarPark from "./components/layout/car-park";

export default function Home() {
  return (
    <div>
      <section className="px-2 md:px-30 text-base mt-15 md:mt-25" > 
        <div className="w-[414px] md:w-300 h-auto md:h-55 block mx-auto text-center">
          <h1 className="relative top-[-20px] text-[48px]/[48px] md:text-[60px] font-bold h-auto md:h-15 md:font-inter font-roboto">Самый большой автопарк Москвы</h1>
          <div className="mt-6 h-auto">Мы предлагаем аренду автомобилей, которые идеально подойдут для любых вкусов и предпочтений. У нас вы найдете авто для любой ситуации и <br/>настроения, от экономичных до роскошных моделей. Наслаждайтесь комфортом и свободой передвижения с нашей широкой линейкой транспортных средств.</div>
          <button className="relative z-10 bg-blue-600 hover:bg-[#3B82F6] cursor-pointer text-[#fff] mt-6 px-4 w-[266px] py-2 rounded-[6px] ">Начать пользоваться</button>
        </div>
      </section>
      
      
      <section className="relative z-0">
        <Image className = "hidden mt-[25px]  w-full md:block md:h-[356px] loading='eager' " src="/img/image 66.png" width={1440} height={356} alt="car"></Image>
        <Image className = "block md:hidden mt-[25px]  h-[264px] loading='eager' " src="/img/map-mini.png" width={700} height={264} alt="car"></Image>
        {/* <Image className = "absolute top-[25px]" src="/img/image 66.png" width={1440} height={356} alt="car"></Image> */}
        <Image className = "mx-auto absolute top-1/2 md:top-[-65px] left-1/2 -translate-x-1/2  loading='eager" src="/img/Car Png Vector 1.png" width={1181} height={665} alt="car"></Image>
      </section>
      
      <section className="px-2 md:px-12 py-20 bg-slate-100 md:text-left text-center">
        <h2 className=" h-12 font-bold text-4xl md:text-5xl">Новые автомобили</h2>
        <MainCarousel/>
      </section>



      <AdvantagesCard/>
    
      <CarPark/>


      <section className="px-[30px] md:px-12 py-[92px] md:py-20 bg-[url(/img/Mask-group.png)] md:bg-none">
          <div className="md:pt-[65px] md:pb-[69px] md:px-28 text-center md:bg-[url(/img/mask.png)] md:bg-slate-100 rounded-[20px]">
            <h2 className="font-bold text-4xl md:text-5xl h-auto text-center">Не нашли ответы на свои вопросы ?</h2>
            <div className="inline-block text-slate-500 mt-6 ">Наши специалисты готовы ответить на все ваши вопросы по аренде авто 🚗💬! Свяжитесь с нами через форму ниже или позвоните, чтобы получить консультацию и выбрать идеальный автомобиль. Мы здесь, чтобы помочь!</div>
            <button className="bg-blue-600 hover:bg-[#3B82F6] cursor-pointer text-[#fff] mt-6 mx-auto w-[213px] h-10 rounded-[8px]">Задать вопрос</button>
          </div>
      </section>


    </div>
  );
}

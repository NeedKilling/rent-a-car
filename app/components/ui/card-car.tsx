import image from "next/image"
import { Image } from 'lucide-react';
export default function CardCar(){
    return(
        <div className="w-[318px] h-[516px] bg-[#fff] flex flex-col gap-4">
            {/* <image src="" width={318} height={280} alt=""></image> */}
            <div className="w-fill h-[280px] bg-slate-50 flex  justify-center items-center">
                <Image className = "w-[75px] h-[75px] text-slate-500" strokeWidth={0.5} />
            </div>
            <div className="pl-6">
                <div className="font-bold text-base">{"{Name}"}</div>
                <div className="flex flex-col gap-2 text-slate-500 text-sm mt-4">
                    <div>{"Двигатель: {}"}</div>
                    <div>{"Год: {}"}</div>
                    <div>{"Привод: {}"}</div>
                    <div>{"Коробка: {}"}</div>
                </div>
            </div>
            <div className="border-[2px] w-fill text-[#F6F6F6]"></div>
            <div><span className="pl-6 text-xl ont-bold">от 20 000 ₽</span> / сутки</div>
        </div>
    )
}

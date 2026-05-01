"use client"
import AccordionContentCustom from "@/app/components/ui/accordion";
import CardCar from "@/app/components/ui/card-car";
import SortDropdown from "@/app/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

let titleArr = ["Двигатель","Привод", "Коробка", "Тип кузова", "Салон" , "Обьем бака", "Топливо", "Круиз-контроль","Парктроники"]

export default function CarPark(){
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    return(
        <div className="py-15 px-2 md:px-30 md:py-25 bg-slate-100">


            <section className="flex flex-wrap md:flex-nowrap justify-between items-center wrap">
                <h2 className="font-bold text-4xl md:text-5xl">Автопарк</h2>
                
                <div className="block md:hidden">
                    <button onClick={() => setIsFilterOpen(true)}className="text-2xl leading-none border-slate-900"><Menu strokeWidth={1} className=""/></button>
                </div>
                
                <div className="grow md:grow-0 my-10 w-full md:w-[226px] sm:order-none">
                    <SortDropdown />
                </div>
            </section>


            {isFilterOpen && (
                    <section className="fixed inset-0 z-50 bg-white md:hidden overflow-y-auto">
                        <div className="flex justify-between items-center p-6">
                            <h3 className="font-bold text-xl">Фильтры</h3>
                            <button onClick={() => setIsFilterOpen(false)}className="text-2xl"><X strokeWidth={2} /></button>
                        </div>
                    
                        <div className="p-6">
                            <Accordion type="multiple" defaultValue={[]} className="w-full">
                                {titleArr.map((item, i) => (
                                    <AccordionContentCustom key={i} title={item} />
                                ))}
                            </Accordion>
                            <button className="text-[#fff] w-full h-10 bg-blue-600 mt-6 rounded-[8px] hover:bg-[#3B82F6] cursor-pointer">Продолжить</button>
                            <button onClick={() => setIsFilterOpen(false)}className="w-full h-10 mt-4 rounded-[8px] hover:bg-slate-200 cursor-pointer border">Очистить фильтры</button>
                        </div>
                    </section>
                )}






            <section className="md:mt-10 md:flex md:justify-between gap-6 items-start">

                <div className="hidden md:block md:w-75 py-6 px-6 bg-[#fff] rounded-[8px]">
                    
                    <Accordion type="multiple" defaultValue={[]} className="w-full gap-6">
                        {titleArr.map((item,i)=>(
                            <AccordionContentCustom key={i} title={item}/>
                        ))}
                    </Accordion>
                    <button className="text-[#fff] w-[252px] h-10 bg-blue-600 mt-6 rounded-[8px] hover:bg-[#3B82F6] cursor-pointer">Продолжить</button>
                    <button className="w-[252px] h-10 mt-4 rounded-[8px] hover:bg-slate-200   cursor-pointer">Очистить фильтры</button>
                </div>

                <div className=" md:grid flex flex-col md:grid-cols-3 gap-6 md:w-full ">
                    {Array.from({length:9}, (_,i)=>(
                        <CardCar key={i}/>
                    ))}
                </div>


            </section>


        </div> 
    )
}
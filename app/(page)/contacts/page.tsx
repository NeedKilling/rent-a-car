import Image from "next/image";
export default function Contacts(){
    return(
        <div className=" px-4 py-15  md:px-30 md:py-25 ">
            <div className = "w-fil  flex flex-col lg:flex-row  md:justify-between md:items-between gap-6  lg:h-[450px]">
                <div className=" md:w-[587px] h-fill">
                    <h2 className="font-bold text-[36px]">Контакты</h2>
                    <div className="flex flex-col gap-2 mt-6">
                        <div> ООО “KeyToDrive” улица Большая Полянка, 28к1, Москва, 119180</div>
                        <div>{"Телефон: {}"}</div>
                        <div>{"Почта: {}"}</div>
                        <div>{"ВК: {}"}</div>
                    </div>
                </div>
                <Image loading="eager" priority className = "md:w-[600px] h-fill mt-[25px]" src="/img/image 44.png" width={1440} height={356} alt="map"></Image>
            </div>
            
            
        </div>
    )
}
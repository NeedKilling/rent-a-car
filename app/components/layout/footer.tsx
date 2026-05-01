import Link from 'next/link'
import { House, Truck,Navigation,User} from 'lucide-react'
export default function Footer(){
    return(
        <div>
            <div className="md-16 md:md-0 md:h-20 px-4 py-10 md:py-7 md:px-30 flex flex-col gap-6 md:flex-row justify-between items-center bg-slate-100 text-slate-500 text-center">
                <div className='order-3 md:order-none'>© 2023-2024 ООО “KeyToDrive”</div>
                <div className='order-2 md:order-none'>Мы предлагаем аренду автомобилей, идеально подходящих на любой вкус</div>
                <div className='order-1 md:order-none'>
                    <Link href="/car-park" className='inline-block mr-6'>Автопарк</Link>
                    <Link href="/contacts" className='inline-block'>Контакты</Link>  
                </div>
            </div>
            <div className='fixed bottom-0 left-0 w-full bg-[#fff] block h-16 md:hidden flex justify-between items-center px-4 text-slate-500 text-[14px]'>
                <Link href= "/">
                    <House  className="block mx-auto"strokeWidth={2} />
                    <div>Главная</div>
                </Link>
                <Link href= "/car-park">
                    <Truck className="block mx-auto" strokeWidth={2} />
                    <div>Автопарк</div>
                </Link>
                <Link href= "contacts">
                    <Navigation  className="block mx-auto"strokeWidth={2} />
                    <div>Контакты</div>
                </Link>
                <Link href= "#">
                    <User  className="block mx-auto"strokeWidth={2} />
                    <div>Профиль</div>
                </Link>
            </div>
        </div>
        
    )
}
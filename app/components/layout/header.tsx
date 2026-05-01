import { Phone } from 'lucide-react';
import Link from 'next/link'


export default function Header(){
    return(
        <div className="h-16 md:h-20 px-2 md:px-12 flex justify-between items-center gap-12 slate-900">
            
            <Link href={"/"}><img className ="block md:hidden" src="/img/Logo-mini.png" alt="logo" /></Link>
            <Link href={"/"}><img className = "hidden md:block" src="/img/Logo.png" alt="logo" /></Link>
            
           
            <div className='md:w-253 h-6 flex justify-between '>
                <div className='hidden md:block'>
                    <Link href={"/car-park"} className='inline-block mr-6'>Автопарк</Link>
                    <Link href={"/contacts"} className='inline-block'>Контакты</Link>  
                </div>
                <Link href={"#"} className='text-blue-600'>
                    <Phone className='inline-block mr-2'/>
                    <div className='inline-block'>7 (999) 999 99 99</div>
                </Link>
            </div>
            <button className='hidden md:block w-20 h-10 text-4 bg-slate-100 hover:bg-slate-200 rounded-[6px] cursor-pointer'>Войти</button>
        </div>
    )
}
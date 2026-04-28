import { Phone } from 'lucide-react';
import Link from 'next/link'


export default function Header(){
    return(
        <div className="h-20 px-12 flex justify-between items-center gap-12 slate-900">
            <img src="/img/Logo.png" alt="logo" />
            <div className='w-253 h-6 flex justify-between'>
                <div className=''>
                    <Link href={"#"} className='inline-block mr-6'>Автопарк</Link>
                    <Link href={"#"} className='inline-block'>Контакты</Link>  
                </div>
                <Link href={"#"} className='text-blue-600'>
                    <Phone className='inline-block mr-2'/>
                    <div className='inline-block'>7 (999) 999 99 99</div>
                </Link>
            </div>
            <button className='w-20 h-10 text-4'>Войти</button>
        </div>
    )
}
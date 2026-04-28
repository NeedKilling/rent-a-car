import Link from 'next/link'
export default function Footer(){
    return(
        <div className="h-20 px-30 flex justify-between items-center gap-[91.5] text-slate-500">
            <div>© 2023-2024 ООО “KeyToDrive”</div>
            <div>Мы предлагаем аренду автомобилей, идеально подходящих на любой вкус</div>
            <div className=''>
                <Link href={"#"} className='inline-block mr-6'>Автопарк</Link>
                <Link href={"#"} className='inline-block'>Контакты</Link>  
            </div>
            
        </div>
    )
}
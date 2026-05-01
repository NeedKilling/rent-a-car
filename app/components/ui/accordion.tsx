import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
type props = {
  title:string,
  contents?:string[]
};


export default function AccordionContentCustom({title, contents = ["text{}","text{}"]}:props){
    return(
        <AccordionItem value={title} className="!border-b-0">
            <AccordionTrigger className="font-bold text-xl">{title}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 overflow-visible animate-none">
                {contents.map((item,i)=>(
                    <div key = {i} className="flex items-center gap-2">
                        <Checkbox className = "w-6 h-6 inline-block" id="terms-checkbox" name={`terms-${i}`} />
                        <Label className="inline-block text-slate-800 text-base" htmlFor={`terms-${i}`}>{item}</Label>
                    </div>
                ))}
            </AccordionContent>
        </AccordionItem>
    )
}
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function SortDropdown() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="w-full md:w-[226px] flex items-center justify-between gap-2 px-6 py-3 bg-white rounded-[8px] hover:bg-slate-50 transition-colors outline-none">
        <span className="mr-12">по убыванию</span>
        <ChevronDown className="w-4 h-4 text-slate-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-full md:w-[226px] bg-white rounded-[8px] border border-slate-200 shadow-lg p-1"
        align="end"
        sideOffset={8}
        
      >
        <DropdownMenuItem className="px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-[6px] cursor-pointer">
          По убыванию
        </DropdownMenuItem>
        <DropdownMenuItem className="px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-[6px] cursor-pointer">
          По возрастанию
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
import { IconBrandReact } from "@tabler/icons-react";

export default function Cabecalho(){
    return(
        <header className="flex justify-between items-center bg-black border-b border-zinc-800 px-6 py-3">
            <div className="flex items-center gap-2">
                <IconBrandReact size={36} stroke={1} className="text-blue-500"/>
                <span className="font-black">Next.js Essencial</span>
            </div>
            <div className="bg-blue-500 p-3 rounded-full flex justify-center items-center">
                US
            </div>
        </header>
    )
}           
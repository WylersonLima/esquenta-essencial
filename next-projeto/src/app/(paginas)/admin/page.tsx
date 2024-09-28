import Pagina from "@/components/template/Pagina";

export default function PaginaAdmin(){
    return (
        <Pagina>
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-black">Administração</h1>
            <p>Esta é a página de administração.</p>
        </div>
        </Pagina>
    )
}
import Contador from "@/components/Contador";
import Pagina from "@/components/template/Pagina";

export default function PaginaContador(){
    return (
        <Pagina>
            <div>
                <Contador valorInicial={0} /> 
                <Contador valorInicial={500} />
                <Contador valorInicial={1000} />
            </div>
        </Pagina>
    )
}
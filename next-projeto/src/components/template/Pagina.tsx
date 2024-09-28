import Cabecalho from "./Cabeçalho"
import Menu from "./Menu"
import Rodape from "./Rodape"

export default function Pagina(props: any){
    return(
        <div className="flex flex-col h-screen">
            <Cabecalho />
            <div className="flex flex-1">
                <Menu />
                <main className="flex-1 p-8">{props.children}</main>
            </div>
            <Rodape />
        </div>
    )
}
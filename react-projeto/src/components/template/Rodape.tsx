export default function Rodape(){
    return(
        <footer className=" bg-zinc-700 px-6 py-3 flex justify-end">
            <span className="text-zinc-400 text-sm">Todos os direitos reservados &copy; {new Date().getFullYear()}</span>
        </footer>
    )
}  
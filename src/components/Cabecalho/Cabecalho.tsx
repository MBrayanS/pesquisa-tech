import './cabecalho.css'

interface CabecalhoProps {
    consultas: string,
}

export default function Cabecalho( props: CabecalhoProps ) {
    const { consultas } = props

    return <div className='cabecalho'>
        <h1>Pesquisa tech</h1>
        <h2>Total de consultas: {consultas}</h2>
    </div>
}
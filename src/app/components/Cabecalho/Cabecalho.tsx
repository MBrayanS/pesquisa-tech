import './cabecalho.css'

interface CabecalhoProps { consultas: number }

export default function Cabecalho( { consultas }: CabecalhoProps ) {
    return <div className='cabecalho'>
        <h1>Pesquisa tech</h1>
        <h2>Total de consultas: {consultas}</h2>
    </div>
}
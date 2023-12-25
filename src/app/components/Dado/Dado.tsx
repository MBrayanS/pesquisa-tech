import './dado.css'

interface DadoProps {
    legenda: string,
    porcentagem: number,
    quantidade: number
}

export default function Dado( props: DadoProps ) {
    const { legenda, porcentagem, quantidade } = props

    const style = { width: `${porcentagem}%` }

    return <div className='dado'>
        <span className="legenda">{legenda}</span>

        <div className="container">
            <div className='barra' style={style}>
                <span className="porcentagem">{porcentagem}%</span>
            </div>
        </div>

        <span className="quantidade">{quantidade}</span>
    </div>
}
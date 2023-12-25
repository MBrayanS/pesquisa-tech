import './grafico.css'

import { IDadoDeGrafico } from '../../../dados/Interfaces.ts'
import Dado from '../Dado/Dado.tsx'

interface GraficoProps {
    titulo: string,
    listaDeDados: Array<IDadoDeGrafico>
}

export default function Grafico( props: GraficoProps ) {
    const { titulo, listaDeDados } = props

    return <div className="grafico">

        <h3>{titulo}</h3>

        <div className='dados'> {

            listaDeDados.map( ( dado, index ) => {
                const { legenda, porcentagem, quantidade } = dado

                return <Dado
                    key={index}
                    legenda={legenda}
                    porcentagem={porcentagem}
                    quantidade={quantidade}
                />
            })

        } </div>

    </div>
}
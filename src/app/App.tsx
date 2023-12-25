import './App.css'

import Cabecalho from './components/Cabecalho/Cabecalho.tsx'
import Rodape from './components/Rodape/Rodape.tsx'
import Grafico from './components/Grafico/Grafico.tsx'

import GeradorDeGraficos from '../dados/GeradorDeGraficos'
import GeradorDeConsultasFalsas from '../dados/GeradorDeConsultasFalsas.ts'

const TOTAL_DE_CONSULTAS = 1500

function App() {
    const consultasFalsas = GeradorDeConsultasFalsas(TOTAL_DE_CONSULTAS)
    const { graficos, totalDeConsultas } = GeradorDeGraficos(consultasFalsas)

    return <>
        <Cabecalho consultas={totalDeConsultas} />

        <div className='main'> {

            graficos.map( ( dadosDoGrafico, index ) => {
                const { titulo, listaDeDados } = dadosDoGrafico

                return <Grafico
                    key={index}
                    titulo={titulo}
                    listaDeDados={listaDeDados}
                />
            })

        } </div>

        <Rodape/>
    </>
}

export default App
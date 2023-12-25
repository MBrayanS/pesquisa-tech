import { calcularPorcentagem } from "../util/FuncoesUteis"
import { IConfiguracaoDeGrafico, IDadoDeGrafico } from "./Interfaces"

export default function MontarGrafico( configuracao: IConfiguracaoDeGrafico, totalDeConsultas: number ) {
    const { titulo, dadosDoGrafico, ordenar = true } = configuracao

    const listaDeDados: Array<IDadoDeGrafico> = []

    for( const legenda in dadosDoGrafico ) {
        const quantidade = dadosDoGrafico[legenda]
        const porcentagem = calcularPorcentagem(quantidade, totalDeConsultas)

        listaDeDados.push({ legenda, porcentagem, quantidade })
    }

    if( ordenar ) listaDeDados.sort( ( dadoA, dadoB ) => dadoB.porcentagem - dadoA.porcentagem )

    return { titulo, listaDeDados }
}
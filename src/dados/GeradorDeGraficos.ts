import { IConsultas } from './Interfaces'

import ApuradorDeDados from "./ApuradorDeDados"
import MontarGrafico from "./MontarGrafico"

export default function GeradorDeGraficos( consultasFalsas: Array<IConsultas> ) {
    const totalDeConsultas = consultasFalsas.length
    const { areas, senioridades, modalidades, salarios, tempo } = ApuradorDeDados(consultasFalsas)

    const configuracaoDeAreas = { titulo: 'Áreas da TI', dadosDoGrafico: areas }
    const configuracaoDeSenioridades = { titulo: 'Senioridades', dadosDoGrafico: senioridades }
    const configuracaoDeSalarios = { titulo: 'Média de salario por nível', dadosDoGrafico: salarios }
    const configuracaoDeTempo = { titulo: 'Tempo de profissão', dadosDoGrafico: tempo, ordenar: false }
    const configuracaoDeModalidades = { titulo: 'Modalidades', dadosDoGrafico: modalidades }

    const graficoDeAreas = MontarGrafico(configuracaoDeAreas, totalDeConsultas)
    const graficoDeSenioridades = MontarGrafico(configuracaoDeSenioridades, totalDeConsultas)
    const graficoDeSalarios = MontarGrafico(configuracaoDeSalarios, totalDeConsultas)
    const graficoDeTempo = MontarGrafico(configuracaoDeTempo, totalDeConsultas)
    const graficoDeModalidades = MontarGrafico(configuracaoDeModalidades, totalDeConsultas)

    const graficos = [ graficoDeAreas, graficoDeSenioridades, graficoDeSalarios, graficoDeTempo, graficoDeModalidades ]

    return { totalDeConsultas,  graficos }
}
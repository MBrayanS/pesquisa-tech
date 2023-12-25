type ChaveValorNumber = { [key: string]: number }

export interface IConsultas {
    area: string,
    senioridade: string,
    modalidade: string,
    salario: number,
    tempo: string
}

export interface IDadosApurados {
    areas: ChaveValorNumber,
    senioridades: ChaveValorNumber,
    modalidades: ChaveValorNumber,
    salarios: ChaveValorNumber,
    tempo: ChaveValorNumber
}

export interface IDadoDeGrafico {
    legenda: string,
    porcentagem: number,
    quantidade: number
}

export interface IConfiguracaoDeGrafico {
    dadosDoGrafico: ChaveValorNumber
    titulo: string,
    ordenar?: boolean
}
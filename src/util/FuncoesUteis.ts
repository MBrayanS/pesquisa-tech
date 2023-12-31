export function calcularPorcentagem( valor: number, valorMaximo: number, porcentagemMaxima: number = 100 ) {
    return Math.round( valor * porcentagemMaxima / valorMaximo )
}

export function numeroAleatorio( min: number, max: number ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min
}
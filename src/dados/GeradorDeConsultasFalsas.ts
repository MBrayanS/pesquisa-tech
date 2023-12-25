import { numeroAleatorio } from "../util/FuncoesUteis"

export default function GeradorDeConsultasFalsas( quantidadeDeConsultas: number ) {
    const listaDeConsultas = []

    for( let n = 0; n < quantidadeDeConsultas; n++) { listaDeConsultas.push( gerarConsultaAleatoria() ) }

    return listaDeConsultas
}

function gerarConsultaAleatoria() {
    const areas = [ 'Frontend', 'Backend', 'Full stack', 'Outros' ]
    const senioridades = [ 'Senior', 'Pleno', 'Junior', 'Estágio' ]
    const modalidades = [ 'Remoto', 'Híbrido', 'Presencial' ]
    const salario = numeroAleatorio(1500, 17000)
    const anos = [ 'menos de 1 ano', '1 a 2 anos', '3 a 5 anos', '6 a 8 anos', 'mais de 8 anos' ]

    const area = areas[ azararNumeroAleatorio(areas.length-1) ]
    const senioridade = senioridades[ azararNumeroAleatorio(senioridades.length-1) ]
    const modalidade = modalidades[ azararNumeroAleatorio(modalidades.length-1) ]
    const tempo = anos[ azararNumeroAleatorio(anos.length-1) ]

    return { area, senioridade, modalidade, salario, tempo }
}

function azararNumeroAleatorio( valor: number ) {
    const numeroDeExecucoes = numeroAleatorio(2, 3)
    let numeroAzarado = 0

    for( let n = 1; n < numeroDeExecucoes; n++) { numeroAzarado += numeroAleatorio(0, valor / n) }

    return numeroAzarado > valor ? valor : numeroAzarado
}
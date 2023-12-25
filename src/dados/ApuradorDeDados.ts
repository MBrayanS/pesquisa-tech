import { IDadosApurados, IConsultas } from "./Interfaces"

export default function ApuradorDeDados( consultasFalsas: Array<IConsultas>  ) {
    const dadosApurados: IDadosApurados = {
        areas: { 'Frontend': 0, 'Backend': 0, 'Full stack': 0, 'Outros': 0 },
        senioridades: { 'Senior': 0, 'Pleno': 0, 'Junior': 0, 'Estágio': 0 },
        modalidades: { 'Remoto': 0, 'Híbrido': 0, 'Presencial': 0 },
        salarios: { 'Frontend': 0, 'Backend': 0, 'Full stack': 0, 'Outros': 0 },
        tempo: { 'menos de 1 ano': 0, '1 a 2 anos': 0, '3 a 5 anos': 0, '6 a 8 anos': 0, 'mais de 8 anos': 0 }
    }
    
    consultasFalsas.forEach( ({ area, senioridade, modalidade, tempo }) => {
        dadosApurados.areas[area] += 1
        dadosApurados.senioridades[senioridade] += 1
        dadosApurados.modalidades[modalidade] += 1
        dadosApurados.salarios[area] += 1
        dadosApurados.tempo[tempo] += 1
    })

    return dadosApurados
}
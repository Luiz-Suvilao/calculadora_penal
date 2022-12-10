import { Crime } from '../interfaces/crime';

export const allCrimes: Crime[] = [
    {
        crime: 'ATROPELAMENTO',
        type: 'TRÂNSITO',
        months: 80,
        trafficTicket: 30000,
        haveBail: false,
    },
    {
        crime: 'ALTA VELOCIDADE',
        type: 'TRÂNSITO',
        months: 40,
        trafficTicket: 10000,
        haveBail: false,
    },
    {
        crime: 'DIREÇÃO PERIGOSA',
        type: 'TRÂNSITO',
        months: 50,
        trafficTicket: 30000,
        haveBail: false,
    },
    {
        crime: 'ANDAR COM VEICULO DANIFICADO',
        type: 'TRÂNSITO',
        months: 10,
        trafficTicket: 15000,
        haveBail: false,
    },
	{
		crime: 'PORTE ILEGAL DE ARMAS LEVES - (PISTOLAS)',
		type: 'GRAVE',
		months: 30,
		trafficTicket: 30000,
		haveBail: false,
	},
	{
		crime: 'PORTE ILEGAL DE ARMAS PESADAS - (FUZÍS)',
		type: 'GRAVE',
		months: 60,
		trafficTicket: 60000,
		haveBail: false,
	},
    {
        crime: 'FUGA',
        type: 'CRIMINOSO',
        months: 90,
        trafficTicket: 15000,
        haveBail: false,
    },
    {
        crime: 'OMISSÃO DE SOCORRO',
        type: 'CRIMINOSO',
        months: 20,
        trafficTicket: 40000,
        haveBail: false,
    },
    {
        crime: 'DESOBEDIÊNCIA A AUTORIDADE',
        type: 'CRIMINOSO',
        months: 40,
        trafficTicket: 15000,
        haveBail: false,
    },
    {
        crime: 'ROUBO',
        type: 'CRIMINOSO',
        months: 50,
        trafficTicket: 20000,
        haveBail: false,
    },
    {
        crime: 'TRAFICO DE DROGAS',
        type: 'CRIMINOSO',
        months: 5,
        trafficTicket: 10000,
        haveBail: false,
    },
    {
        crime: 'TRAFICO DE MUNIÇÃO',
        type: 'CRIMINOSO',
        months: 5,
        trafficTicket: 10000,
        haveBail: false,
    },
    {
        crime: 'DESACATO',
        type: 'CRIMINOSO',
        months: 25,
        trafficTicket: 30000,
        haveBail: false,
    },
    {
        crime: 'TENTATIVA DE HOMICÍDIO',
        type: 'CRIMINOSO',
        months: 50,
        trafficTicket: 50000,
        haveBail: false,
    },
	{
		crime: 'EXTORSÃO',
		type: 'CRIMINOSO',
		months: 30,
		trafficTicket: 15000,
		haveBail: false,
	},
	{
		crime: 'ASSALTO Á RESIDÊNCIA',
		type: 'ASSALTO',
		months: 30,
		trafficTicket: 10000,
		haveBail: false,
	},
	{
		crime: 'ASSALTO AO AMMUNATION',
		type: 'ASSALTO',
		months: 30,
		trafficTicket: 15000,
		haveBail: false,
	},
	{
		crime: 'LATROCÍNIO',
		type: 'ASSALTO',
		months: 60,
		trafficTicket: 50000,
		haveBail: false,
	}
];
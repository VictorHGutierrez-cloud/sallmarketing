export const DEFAULT_VALUES = {
  empresa: "Dulceria Nacional / Grupo Webcor",
  unidades: 3,
  colaboradoresPorUnidade: 167,
  totalColaboradores: 500,
  salarioResponsavelRH_MZN: 108927,
  salarioAnalista_MZN: 25000,
  tempoFechamentoAtual: 10,
  tempoFechamentoFactorial: 2.5,
  horasPorDia: 8,
  numPessoasRH: 2,
  horasRetrabalho: 33,
  // Custo real de erros de folha/compliance por unidade por mês (EUR)
  // Inclui: pagamentos incorretos de horas extra, faltas mal contabilizadas,
  // correções manuais, risco de compliance
  custoErrosUnidade_EUR: 350,
  // Pricing mensal (EUR)
  custoColaboradorMes_EUR: 4.90,
  custoPrimaveraMes_EUR: 0.60,
  implantacaoFactorial_EUR: 2000,
  // Conversions
  conversaoEUR_MZN: 68.75,
  percentualEncargos: 0.30,
  conversaoMZN_EUR: 0.01455,
};

export const SCENARIOS = {
  conservador: {
    nome: "Conservador",
    reducaoTempo: 0.6,
    tempoFactorial: 4,
    reducaoRetrabalho: 0.7,
    reducaoErros: 0.5,
  },
  realista: {
    nome: "Realista",
    reducaoTempo: 0.75,
    tempoFactorial: 2.5,
    reducaoRetrabalho: 0.85,
    reducaoErros: 0.6,
    recomendado: true,
  },
  otimista: {
    nome: "Otimista",
    reducaoTempo: 0.8,
    tempoFactorial: 2,
    reducaoRetrabalho: 0.95,
    reducaoErros: 0.7,
  },
} as const;

export type ScenarioKey = keyof typeof SCENARIOS;

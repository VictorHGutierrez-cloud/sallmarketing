import { useMemo } from "react";
import { DEFAULT_VALUES, SCENARIOS, type ScenarioKey } from "@/utils/constants";

export interface ROIInputs {
  unidades: number;
  totalColaboradores: number;
  salarioResponsavelRH: number;
  salarioAnalista: number;
  tempoFechamentoAtual: number;
  cenario: ScenarioKey;
}

export interface ROIResults {
  // Custos operacionais atuais (mensal)
  custoFechamentoMensal: number;
  custoRetrabalhoMensal: number;
  custoErrosMensal: number;
  custoAtualMensal: number;
  // Investimento mensal
  mes1Total: number;
  mensalRecorrente: number;
  factorialMensal: number;
  primaveraMensal: number;
  implantacao: number;
  custoPorColabMes2: number;
  // Economia mensal
  economiaMensal: number;
  breakdownFechamento: number;
  breakdownRetrabalho: number;
  breakdownErros: number;
  // ROI
  ganhoLiquidoMensal: number;
  roiPercent: number;
  paybackMeses: number;
  // Timeline 12 meses
  timeline12meses: { mes: number; economiaAcumulada: number; investimentoAcumulado: number }[];
}

export function useROICalculation(inputs: ROIInputs): ROIResults {
  return useMemo(() => {
    const d = DEFAULT_VALUES;
    const scenario = SCENARIOS[inputs.cenario];
    const conv = d.conversaoMZN_EUR;

    // Salary cost in EUR (monthly)
    const salResponsavelEUR = inputs.salarioResponsavelRH * conv;
    const salAnalistaEUR = inputs.salarioAnalista * conv;
    const custoHoraResp = (salResponsavelEUR * (1 + d.percentualEncargos)) / (22 * d.horasPorDia);
    const custoHoraAnalista = (salAnalistaEUR * (1 + d.percentualEncargos)) / (22 * d.horasPorDia);

    // 1. Custo mensal de fechamento (10 dias dedicados, equipa toda)
    const custoFechamentoMensalUnidade =
      (custoHoraResp * inputs.tempoFechamentoAtual * d.horasPorDia) +
      (custoHoraAnalista * inputs.tempoFechamentoAtual * d.horasPorDia * d.numPessoasRH);
    const custoFechamentoMensal = custoFechamentoMensalUnidade * inputs.unidades;

    // 2. Custo mensal de retrabalho (33h/mês de trabalho duplicado)
    const custoRetrabalhoMensal = d.horasRetrabalho * custoHoraAnalista * d.numPessoasRH * inputs.unidades;

    // 3. Custo de erros de folha/compliance (EUR direto por unidade)
    const custoErrosMensal = d.custoErrosUnidade_EUR * inputs.unidades;

    // Total custo operacional atual mensal
    const custoAtualMensal = custoFechamentoMensal + custoRetrabalhoMensal + custoErrosMensal;

    // Economia mensal com Factorial
    const breakdownFechamento = custoFechamentoMensal * scenario.reducaoTempo;
    const breakdownRetrabalho = custoRetrabalhoMensal * scenario.reducaoRetrabalho;
    const breakdownErros = custoErrosMensal * scenario.reducaoErros;
    const economiaMensal = breakdownFechamento + breakdownRetrabalho + breakdownErros;

    // Investimento mensal (EUR)
    const factorialMensal = inputs.totalColaboradores * d.custoColaboradorMes_EUR;
    const primaveraMensal = inputs.totalColaboradores * d.custoPrimaveraMes_EUR;
    const implantacao = d.implantacaoFactorial_EUR;
    const mensalRecorrente = factorialMensal + primaveraMensal;
    const mes1Total = implantacao + primaveraMensal;

    const custoPorColabMes2 = inputs.totalColaboradores > 0 ? mensalRecorrente / inputs.totalColaboradores : 0;

    // ROI (baseado no recorrente mês 2+)
    const ganhoLiquidoMensal = economiaMensal - mensalRecorrente;
    const roiPercent = mensalRecorrente > 0 ? (ganhoLiquidoMensal / mensalRecorrente) * 100 : 0;
    const paybackMeses = ganhoLiquidoMensal > 0 ? implantacao / ganhoLiquidoMensal : 0;

    // Timeline 12 meses
    const timeline12meses = Array.from({ length: 12 }, (_, i) => {
      const mes = i + 1;
      const investimentoAcumulado = mes === 1
        ? mes1Total
        : mes1Total + mensalRecorrente * (mes - 1);
      const economiaAcumulada = mes === 1 ? 0 : economiaMensal * (mes - 1);
      return { mes, economiaAcumulada, investimentoAcumulado };
    });

    return {
      custoFechamentoMensal,
      custoRetrabalhoMensal,
      custoErrosMensal,
      custoAtualMensal,
      mes1Total,
      mensalRecorrente,
      factorialMensal,
      primaveraMensal,
      implantacao,
      custoPorColabMes2,
      economiaMensal,
      breakdownFechamento,
      breakdownRetrabalho,
      breakdownErros,
      ganhoLiquidoMensal,
      roiPercent,
      paybackMeses,
      timeline12meses,
    };
  }, [inputs]);
}

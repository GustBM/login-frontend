import Data from "@customTypes/Data";

interface RawData {
  Tempo: number;
  "Temperatura de Entrada do Multijato": number;
  "Temperatura de saída no multijato": number;
  "Abertura da válvula de alimentação": number;
  "Nível do cozedor": number;
  "Capacitância do cozedor": number;
  "Pressão do cozedor": number;
  "Abertura da válvula de alimentação_1": number;
  "Nível do cozedor_1": number;
  "Capacitância do cozedor_1": number;
  "Pressão do cozedor_1": number;
  "Abertura da válvula de alimentação_2": number;
  "Nível do cozedor_2": number;
  "Capacitância do cozedor_2": number;
  "Pressão do cozedor_2": number;
  "Abertura da válvula de alimentação_3": number;
  "Nível do cozedor_3": number;
  "Capacitância do cozedor_3": number;
  "Pressão do cozedor_3": number;
  "Abertura da válvula de alimentação_4": number;
  "Nível do cozedor_4": number;
  "Capacitância do cozedor_4": number;
  "Pressão do cozedor_4": number;
  "Abertura da válvula de alimentação_5": number;
  "Nível do cozedor_5": number;
  "Capacitância do cozedor_5": number;
  "Pressão do cozedor_5": number;
  "Abertura da válvula de alimentação_6": number;
  "Nível do cozedor_6": number;
  "Capacitância do cozedor_6": number;
  "Pressão do cozedor_6": number;
  "Abertura da válvula de alimentação_7": number;
  "Nível do cozedor_7": number;
  "Capacitância do cozedor_7": number;
  "Pressão do cozedor_7": number;
}

export function transformJsonToData(rawData: RawData[]): Data[] {
  
  function jsonValueCheck(params: any): number {
    if(typeof params === 'number') {
      // const decimalPlaces = 2;
      // const parsedNumber = Math.round(params * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
      return params;
    } else {
      return 0;
    }
  }

  return rawData.map((data) => ({
    tempo: data.Tempo,
    temperaturaEntradaMultijato: jsonValueCheck(data["Temperatura de Entrada do Multijato"]),
    temperaturaSaidaMultijato: jsonValueCheck(data["Temperatura de saída no multijato"]),
    pressaoCozedor: jsonValueCheck(data["Pressão do cozedor"]),
    nivelCozedor: jsonValueCheck(data["Nível do cozedor"]),
    capacitanciaCozedor: jsonValueCheck(data["Capacitância do cozedor"]),
    aberturaValvulaAlimentacao: jsonValueCheck(data["Abertura da válvula de alimentação"]),
    aberturaValvulaAlimentacao_1: jsonValueCheck(data["Abertura da válvula de alimentação_1"]),
    nivelCozedor_1: jsonValueCheck(data["Nível do cozedor_1"]),
    capacitanciaCozedor_1: jsonValueCheck(data["Capacitância do cozedor_1"]),
    pressaoCozedor_1: jsonValueCheck(data["Pressão do cozedor_1"]),
    aberturaValvulaAlimentacao_2: jsonValueCheck(data["Abertura da válvula de alimentação_2"]),
    nivelCozedor_2: jsonValueCheck(data["Nível do cozedor_2"]),
    capacitanciaCozedor_2: jsonValueCheck(data["Capacitância do cozedor_2"]),
    pressaoCozedor_2: jsonValueCheck(data["Pressão do cozedor_2"]),
    aberturaValvulaAlimentacao_3: jsonValueCheck(data["Abertura da válvula de alimentação_3"]),
    nivelCozedor_3: jsonValueCheck(data["Nível do cozedor_3"]),
    capacitanciaCozedor_3: jsonValueCheck(data["Capacitância do cozedor_3"]),
    pressaoCozedor_3: jsonValueCheck(data["Pressão do cozedor_3"]),
    aberturaValvulaAlimentacao_4: jsonValueCheck(data["Abertura da válvula de alimentação_4"]),
    nivelCozedor_4: jsonValueCheck(data["Nível do cozedor_4"]),
    capacitanciaCozedor_4: jsonValueCheck(data["Capacitância do cozedor_4"]),
    pressaoCozedor_4: jsonValueCheck(data["Pressão do cozedor_4"]),
    aberturaValvulaAlimentacao_5: jsonValueCheck(data["Abertura da válvula de alimentação_5"]),
    nivelCozedor_5: jsonValueCheck(data["Nível do cozedor_5"]),
    capacitanciaCozedor_5: jsonValueCheck(data["Capacitância do cozedor_5"]),
    pressaoCozedor_5: jsonValueCheck(data["Pressão do cozedor_5"]),
    aberturaValvulaAlimentacao_6: jsonValueCheck(data["Abertura da válvula de alimentação_6"]),
    nivelCozedor_6: jsonValueCheck(data["Nível do cozedor_6"]),
    capacitanciaCozedor_6: jsonValueCheck(data["Capacitância do cozedor_6"]),
    pressaoCozedor_6: jsonValueCheck(data["Pressão do cozedor_6"]),
    aberturaValvulaAlimentacao_7: jsonValueCheck(data["Abertura da válvula de alimentação_7"]),
    nivelCozedor_7: jsonValueCheck(data["Nível do cozedor_7"]),
    capacitanciaCozedor_7: jsonValueCheck(data["Capacitância do cozedor_7"]),
    pressaoCozedor_7: jsonValueCheck(data["Pressão do cozedor_7"])
  }));
}

export function tempoToDate(tempo: number) {

  const milliseconds = (tempo - 25569) * 86400000;

  return new Date(milliseconds);
}
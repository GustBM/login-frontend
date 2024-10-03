import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import Data from '@customTypes/Data';
import { tempoToDate } from '@utils/generalUtils';

interface LineGraphProps {
  data: Array<Data>;
}

class LineGraph extends Component<LineGraphProps> {
  getOption = () => {
    const { data } = this.props;

    const xAxisLabels = [
      'Temperatura Entrada Multijato',
      'Temperatura Saída Multijato',
      'Abertura Válvula Alimentação',
      'Nível Cozedor',
      'Capacitância Cozedor',
      'Pressão Cozedor',
      'Abertura Válvula Alimentação 1',
      'Nível Cozedor 1',
      'Capacitância Cozedor 1',
      'Pressão Cozedor 1',
      'Abertura Válvula Alimentação 2',
      'Nível Cozedor 2',
      'Capacitância Cozedor 2',
      'Pressão Cozedor 2',
      'Abertura Válvula Alimentação 3',
      'Nível Cozedor 3',
      'Capacitância Cozedor 3',
      'Pressão Cozedor 3',
      'Abertura Válvula Alimentação 4',
      'Nível Cozedor 4',
      'Capacitância Cozedor 4',
      'Pressão Cozedor 4',
      'Abertura Válvula Alimentação 5',
      'Nível Cozedor 5',
      'Capacitância Cozedor 5',
      'Pressão Cozedor 5',
      'Abertura Válvula Alimentação 6',
      'Nível Cozedor 6',
      'Capacitância Cozedor 6',
      'Pressão Cozedor 6',
      'Abertura Válvula Alimentação 7',
      'Nível Cozedor 7',
      'Capacitância Cozedor 7',
      'Pressão Cozedor 7',
    ];

    return {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: xAxisLabels
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.map((item) => tempoToDate(item.tempo).toLocaleDateString())
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Abertura Valvula de Alimentação',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.aberturaValvulaAlimentacao)
        },
        {
          name: 'Temperatura Entrada Multijato',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.temperaturaEntradaMultijato)
        },
        {
          name: 'Temperatura Saída Multijato',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.temperaturaSaidaMultijato)
        },
        {
          name: 'Pressão Cozedor',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.pressaoCozedor)
        },
        {
          name: 'Nível Cozedor',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.nivelCozedor)
        },
        {
          name: 'Capacitância Cozedor',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.capacitanciaCozedor)
        },
        {
          name: 'Abertura Válvula Alimentação_1',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.aberturaValvulaAlimentacao_1)
        },
        {
          name: 'Nível Cozedor_1',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.nivelCozedor_1)
        },
        {
          name: 'Capacitância Cozedor_1',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.capacitanciaCozedor_1)
        },
        {
          name: 'Pressão Cozedor_1',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.pressaoCozedor_1)
        },
        {
          name: 'Abertura Válvula Alimentação_2',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.aberturaValvulaAlimentacao_2)
        },
        {
          name: 'Nível Cozedor_2',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.nivelCozedor_2)
        },
        {
          name: 'Capacitância Cozedor_2',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.capacitanciaCozedor_2)
        },
        {
          name: 'Pressão Cozedor_2',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.pressaoCozedor_2)
        },
        {
          name: 'Abertura Válvula Alimentação_3',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.aberturaValvulaAlimentacao_3)
        },
        {
          name: 'Nível Cozedor_3',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.nivelCozedor_3)
        },
        {
          name: 'Capacitância Cozedor_3',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.capacitanciaCozedor_3)
        },
        {
          name: 'Pressão Cozedor_3',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.pressaoCozedor_3)
        },
        {
          name: 'Abertura Válvula Alimentação_4',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.aberturaValvulaAlimentacao_4)
        },
        {
          name: 'Nível Cozedor_4',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.nivelCozedor_4)
        },
        {
          name: 'Capacitância Cozedor_4',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.capacitanciaCozedor_4)
        },
        {
          name: 'Pressão Cozedor_4',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.pressaoCozedor_4)
        },
        {
          name: 'Abertura Válvula Alimentação_5',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.aberturaValvulaAlimentacao_5)
        },
        {
          name: 'Nível Cozedor_5',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.nivelCozedor_5)
        },
        {
          name: 'Capacitância Cozedor_5',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.capacitanciaCozedor_5)
        },
        {
          name: 'Pressão Cozedor_5',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.pressaoCozedor_5)
        },
        {
          name: 'Abertura Válvula Alimentação_6',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.aberturaValvulaAlimentacao_6)
        },
        {
          name: 'Nível Cozedor_6',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.nivelCozedor_6)
        },
        {
          name: 'Capacitância Cozedor_6',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.capacitanciaCozedor_6)
        },
        {
          name: 'Pressão Cozedor_6',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.pressaoCozedor_6)
        },
        {
          name: 'Abertura Válvula Alimentação_7',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.aberturaValvulaAlimentacao_7)
        },
        {
          name: 'Nível Cozedor_7',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.nivelCozedor_7)
        },
        {
          name: 'Capacitância Cozedor_7',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.capacitanciaCozedor_7)
        },
        {
          name: 'Pressão Cozedor_7',
          type: 'line',
          stack: 'Total',
          data: data.map((item) => item.pressaoCozedor_7)
        }
      ]
    };
  };

  render() {
    return (
      <div id="heatmap-container">
        <ReactEcharts
          option={this.getOption()}
          style={{ height: '1000px', width: 'auto' }}
        />
      </div>
    );
  }
}

export default LineGraph;

import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import Data from '@customTypes/Data';

interface HeatmapProps {
  data: Array<Data>;
}

class Heatmap extends Component<HeatmapProps> {
  getOption = () => {
    const { data } = this.props;

    const yAxisLabels = [
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

    const heatmapData = data.flatMap((item, index) => [
      [index, 0, item.temperaturaEntradaMultijato],
      [index, 1, item.temperaturaSaidaMultijato],
      [index, 2, item.aberturaValvulaAlimentacao],
      [index, 3, item.nivelCozedor],
      [index, 4, item.capacitanciaCozedor],
      [index, 5, item.pressaoCozedor],
      [index, 6, item.aberturaValvulaAlimentacao_1],
      [index, 7, item.nivelCozedor_1],
      [index, 8, item.capacitanciaCozedor_1],
      [index, 9, item.pressaoCozedor_1],
      [index, 10, item.aberturaValvulaAlimentacao_2],
      [index, 11, item.nivelCozedor_2],
      [index, 12, item.capacitanciaCozedor_2],
      [index, 13, item.pressaoCozedor_2],
      [index, 14, item.aberturaValvulaAlimentacao_3],
      [index, 15, item.nivelCozedor_3],
      [index, 16, item.capacitanciaCozedor_3],
      [index, 17, item.pressaoCozedor_3],
      [index, 18, item.aberturaValvulaAlimentacao_4],
      [index, 19, item.nivelCozedor_4],
      [index, 20, item.capacitanciaCozedor_4],
      [index, 21, item.pressaoCozedor_4],
      [index, 22, item.aberturaValvulaAlimentacao_5],
      [index, 23, item.nivelCozedor_5],
      [index, 24, item.capacitanciaCozedor_5],
      [index, 25, item.pressaoCozedor_5],
      [index, 26, item.aberturaValvulaAlimentacao_6],
      [index, 27, item.nivelCozedor_6],
      [index, 28, item.capacitanciaCozedor_6],
      [index, 29, item.pressaoCozedor_6],
      [index, 30, item.aberturaValvulaAlimentacao_7],
      [index, 31, item.nivelCozedor_7],
      [index, 32, item.capacitanciaCozedor_7],
      [index, 33, item.pressaoCozedor_7],
    ]);

    const allValues = heatmapData.map((point) => point[2]);
    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);

    return {
      title: {
        text: 'Heatmap: File Data',
        left: 'center',
      },
      tooltip: {
        position: 'top',
        formatter: function (params: any) {
          const labels = yAxisLabels[params.value[1]];
          return `${labels}: ${params.value[2]}`;
        },
      },
      grid: {
        height: '50%',
        top: '10%',
      },
      xAxis: {
        type: 'category',
        data: data.map((item) => item.tempo),
        splitArea: {
          show: true,
        },
        name: 'Tempo',
      },
      yAxis: {
        type: 'category',
        data: yAxisLabels,
        splitArea: {
          show: true,
        },
        name: 'Atributos',
      },
      visualMap: [
        {
          min: minValue,
          max: maxValue,
          calculable: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          text: ['High', 'Low'],
          textStyle: {
            color: '#000',
          },
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'],
          },
        },
      ],
      series: [
        {
          name: 'Data Attributes',
          type: 'heatmap',
          data: heatmapData,
          label: {
            show: true,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  };

  render() {
    return (
      <div>
        <ReactEcharts
          option={this.getOption()}
          style={{ height: '1200px', width: '100%' }}
        />
      </div>
    );
  }
}

export default Heatmap;

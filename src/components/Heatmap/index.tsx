import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import Data from '@customTypes/Data';
import { tempoToDate } from '@utils/generalUtils';

interface HeatmapProps {
  data: Array<Data>;
}

class Heatmap extends Component<HeatmapProps> {
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
      tooltip: {},
      grid: {
        right: 160,
        left: 200
      },
      xAxis: {
        type: 'category',
        data: data.map((item) => tempoToDate(item.tempo).toLocaleDateString())
      },
      yAxis: {
        type: 'category',
        data: xAxisLabels
      },
      visualMap: {
        type: 'piecewise',
        min: minValue,
        max: maxValue,
        left: 'right',
        top: 'center',
        calculable: true,
        realtime: false,
        splitNumber: 8,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026'
          ]
        }
      },
      series: [
        {
          name: 'Data',
          type: 'heatmap',
          data: heatmapData,
          emphasis: {
            itemStyle: {
              borderColor: '#333',
              borderWidth: 1
            }
          },
          progressive: 1000,
          animation: false
        }
      ]
    };

    // return {
    //   tooltip: {
    //     trigger: 'axis',
    //     position: function (pt: any) {
    //       return [pt[0], '10%'];
    //     }
    //   },
    //   title: {
    //     left: 'center',
    //     text: 'Dados em Gráfico de Área'
    //   },
    //   toolbox: {
    //     feature: {
    //       dataZoom: {
    //         yAxisIndex: 'none'
    //       },
    //       restore: {},
    //       saveAsImage: {}
    //     }
    //   },
    //   xAxis: {
    //     type: 'category',
    //     boundaryGap: false,
    //     data: data.map((item) => tempoToDate(item.tempo).toLocaleDateString())
    //   },
    //   yAxis: {
    //     // type: 'value',
    //     // boundaryGap: [0, '100%']
    //     type: 'category',
    //     data: xAxisLabels
    //   },
    //   dataZoom: [
    //     {
    //       type: 'inside',
    //       start: 0,
    //       end: 10
    //     },
    //     {
    //       start: 0,
    //       end: 10
    //     }
    //   ],
    //   series: [
    //     {
    //       name: 'Data',
    //       type: 'line',
    //       symbol: 'none',
    //       sampling: 'lttb',
    //       itemStyle: {
    //         color: 'rgb(255, 70, 131)'
    //       },
    //       areaStyle: {
    //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //           {
    //             offset: 0,
    //             color: 'rgb(255, 158, 68)'
    //           },
    //           {
    //             offset: 1,
    //             color: 'rgb(255, 70, 131)'
    //           }
    //         ])
    //       },
    //       data: heatmapData
    //     }
    //   ]
    // };

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

export default Heatmap;

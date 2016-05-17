angular.module('starter')

  .directive('hcRoseChart', function() {
      return {
          restrict: 'E',
          template: '<div></div>',
          scope: {
              title: '@',
              data: '='
          },
          link: function (scope, element) {
            var categories = ['12AM', '', '', '3AM', '', '', '6AM', '', '', '9AM', '', '', '12PM', '', '', '3PM',
                              '', '', '6PM', '', '', '9PM', '', ''];

            // Highcharts.setOptions({
            //   chart: {
            //     backgroundColor: {
            //         linearGradient: [0, 0, 500, 500],
            //         stops: [
            //             [0, 'rgb(255, 255, 255)'],
            //             [1, 'rgb(240, 240, 255)']
            //             ]
            //     },
            //     borderWidth: 2,
            //     color: {
            //         linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            //         stops: [
            //             [0, '#003399'],
            //             [1, '#3366AA']
            //         ]
            //     }
            //     plotBackgroundColor: 'rgba(255, 255, 255, .9)',
            //     plotShadow: true,
            //     plotBorderWidth: 1
            //   }
            // });

            Highcharts.chart(element[0], {
              credits: {
                enabled: false
              },
              series: [{
                  data: scope.data,
                  showInLegend: false
              }],
              chart: {
                  // height: '600px',
                  // width: '600px',
                  polar: true,
                  // renderTo: 'chart',
                  // spacingLeft: 10,
                  type: 'column'
              },
              title: {
                  text: 'Mon, Feb 1, 2016'
              },
              subtitle: {
                style: {
                  'font-size': '22px'
                },
                verticalAlign: 'middle',
                text: '<b>198</b><span style="color: gray;font-size: 14px"> kWh</span><br/><span style="color: gray;font-size: 14px">total usage</span>',
                x: 0,
                y: 20
              },
              pane: {
                  size: '85%'
              },
              // legend: {
              //     align: 'right',
              //     verticalAlign: 'top',
              //     y: 100,
              //     layout: 'vertical'
              // },
              xAxis: {
                  distance: 5,
                  gridLineColor: '#ffffff',
                  lineColor: '#eeeeee',
                  min: 0,
                  max: 360,
                  showFirstLabel: true,
                  type: "",
                  tickInterval: 15,
                  tickmarkPlacement: 'on',
                  labels: {
                    formatter: function () {
                        return categories[this.value / 15];
                    },
                    backgroundColor: {
                        linearGradient: [0, 0, 500, 500],
                        stops: [
                            [0, 'rgb(255, 255, 255)'],
                            [1, 'rgb(120, 240, 120)']
                            ]
                    },
                    style: {"color":"#333333"}
                  }
              },
              yAxis: {
                alternateGridColor: '#e4f1f5',
                lineColor: '#ff0000',
                gridLineColor: '#e4f1f5',
                min: 0,
                max: 0,
                maxColor: '#ff0000',
                endOnTick: true,
                plotLines: [{color: '#ffffff'}],
                showLastLabel: false,
                reversedStacks: false,
                startOnTick: true,
                style: {"color": '#214fb0'}
              },
              // tooltip: {
              //     valueSuffix: '%'
              // },
              plotOptions: {
                  column: {
                    // color: '#0179c5',
                    // colorByPoint: false
                    zones: [{
                      value: 0.3,
                      color: '#0179c5'
                    },{
                      color: '#f054eb'
                    }]
                  },
                  series: {
                      stacking: 'normal',
                      shadow: false,
                      groupPadding: 0,
                      pointPlacement: 'between'
                  }
              }
            }, function(chart) {
              angular.forEach(chart.xAxis[0].ticks, function(tick, value) {
                if (tick.label) {
                  tick.label.attr({rotation: tick.pos});
                }
              });
            });
          }
      };
  });

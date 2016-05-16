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
            //     chart: {
            //         backgroundColor: {
            //             linearGradient: [0, 0, 500, 500],
            //             stops: [
            //                 [0, 'rgb(255, 255, 255)'],
            //                 [1, 'rgb(240, 240, 255)']
            //                 ]
            //         },
            //         borderWidth: 2,
            //         plotBackgroundColor: 'rgba(255, 255, 255, .9)',
            //         plotShadow: true,
            //         plotBorderWidth: 1
            //     }
            // });

            Highcharts.chart(element[0], {

              series: [{
                  data: scope.data
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
                  min: 0,
                  max: 360,
                  type: "",
                  tickInterval: 15,
                  tickmarkPlacement: 'on',
                  labels: {
                      formatter: function () {
                          return categories[this.value / 15];
                      }
                  }
              },
              yAxis: {
                  min: 0,
                  endOnTick: false,
                  showLastLabel: false,
                  title: {
                      text: '198 kWH total usage'
                  },
                  // labels: {
                  //     formatter: function () {
                  //         return this.value + '%';
                  //     }
                  // },
                  reversedStacks: false
              },
              // tooltip: {
              //     valueSuffix: '%'
              // },
              plotOptions: {
                  series: {
                      stacking: 'normal',
                      shadow: false,
                      groupPadding: 0,
                      pointPlacement: 'on'
                  }
              }
            });
          }
      };
  });

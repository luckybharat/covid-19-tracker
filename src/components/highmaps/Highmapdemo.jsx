import React from 'react'
import Highcharts from 'highcharts/highmaps'
import drilldown from 'highcharts/modules/drilldown'
import dataModule from 'highcharts/modules/data'
import mapData from "./mapData";
import HighchartsReact from 'highcharts-react-official'
import $ from 'jquery'
drilldown(Highcharts)
dataModule(Highcharts)

var data = Highcharts.geojson(Highcharts.maps["countries/in/in-all"]),
separators = Highcharts.geojson(
  Highcharts.maps["countries/in/in-all"],
  "mapline"
);

data.forEach(function (el, i) {
  el.drilldown = el.properties['hc-key']
  el.value = i // Non-random bogus data
})

window.Highcharts = Highcharts

const options = {
  chart: {
    events: {
      drilldown: function (e) {
        if (!e.seriesOptions) {
          var chart = this,
            mapKey = 'countries/in/' + e.point.drilldown + '-all',
            // Handle error, the timeout is cleared on success
            fail = setTimeout(function () {
              if (!Highcharts.maps[mapKey]) {
                chart.showLoading(
                  '<i class="icon-frown"></i> Failed loading ' + e.point.name
                )
                fail = setTimeout(function () {
                  chart.hideLoading()
                }, 1000)
              }
            }, 3000)

          // Show the spinner
          chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>') // Font Awesome spinner

          // Load the drilldown map
          $.getScript(
            'https://code.highcharts.com/mapdata/' + mapKey + '.js',
            function () {
              data = Highcharts.geojson(Highcharts.maps[mapKey])

              // Set a non-random bogus value
              $.each(data, function (i) {
                this.value = i
              })

              // Hide loading and add series
              chart.hideLoading()
              clearTimeout(fail)
              chart.addSeriesAsDrilldown(e.point, {
                name: e.point.name,
                data: data,
                dataLabels: {
                  enabled: true,
                  format: '{point.name}'
                }
              })
            }
          )
        }

        this.setTitle(null, { text: e.point.name })
      },
      drillup: function () {
        this.setTitle(null, { text: '' })
      }
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  colorAxis: {
    min: 0,
    minColor: '#E6E7E8',
    maxColor: '#005645'
  },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'bottom'
    }
  },

  plotOptions: {
    map: {
      states: {
        hover: {
          color: '#EEDD66'
        }
      }
    }
  },

  series: [
    {
      data: data,
      name: 'USA',
      dataLabels: {
        enabled: true,
        format: '{point.properties.postal-code}'
      }
    },
    {
      type: 'mapline',
      data: separators,
      color: 'silver',
      enableMouseTracking: false,
      animation: {
        duration: 500
      }
    }
  ],

  drilldown: {
    activeDataLabelStyle: {
      color: '#FFFFFF',
      textDecoration: 'none',
      textOutline: '1px #000000'
    },
    drillUpButton: {
      relativeTo: 'spacingBox',
      position: {
        x: 0,
        y: 60
      }
    }
  }
}
// const options = {
//   chart: {
//     events: {
//       drilldown: function(e) {
//         if (!e.seriesOptions) {
//           var chart = this,
//             mapKey = "countries/in/" + e.point.drilldown + "-all",
//             // Handle error, the timeout is cleared on success
//             fail = setTimeout(function() {
//               if (!Highcharts.maps[mapKey]) {
//                 chart.showLoading(
//                   '<i class="icon-frown"></i> Failed loading ' + e.point.name
//                 );
//                 fail = setTimeout(function() {
//                   chart.hideLoading();
//                 }, 1000);
//               }
//             }, 3000);

//           // Show the spinner
//           chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>'); // Font Awesome spinner
//           let uriScript =
//             "https://code.highcharts.com/mapdata/" + mapKey + ".js";
//           // Load the drilldown map
//           console.log(uriScript);
//           this.getScript(uriScript, function() {
//             data = Highcharts.geojson(Highcharts.maps[mapKey]);

//             // Set a non-random bogus value
//             this.each(data, function(i) {
//               this.value = i;
//             });

//             // Hide loading and add series
//             chart.hideLoading();
//             clearTimeout(fail);
//             chart.addSeriesAsDrilldown(e.point, {
//               name: e.point.name,
//               data: data,
//               dataLabels: {
//                 enabled: true,
//                 format: "{point.name}"
//               }
//             });
//           });
//         }

//         this.setTitle(null, { text: e.point.name });
//       },
//       drillup: function() {
//         this.setTitle(null, { text: "" });
//       }
//     }
//   },

//   legend: {
//     layout: "vertical",
//     align: "right",
//     verticalAlign: "middle"
//   },

//   colorAxis: {
//     min: 0,
//     minColor: "#E6E7E8",
//     maxColor: "#005645"
//   },

//   mapNavigation: {
//     enabled: true,
//     buttonOptions: {
//       verticalAlign: "bottom"
//     }
//   },

//   plotOptions: {
//     map: {
//       states: {
//         hover: {
//           color: "#EEDD66"
//         }
//       }
//     }
//   },

//   series: [
//     {
//       data: data,
//       name: "India",
//       dataLabels: {
//         enabled: true,
//         format: "{point.properties.postal-code}"
//       }
//     },
//     {
//       type: "mapline",
//       data: seprators,
//       color: "silver",
//       enableMouseTracking: false,
//       animation: {
//         duration: 500
//       }
//     }
//   ],

//   drilldown: {
//     activeDataLabelStyle: {
//       color: "#FFFFFF",
//       textDecoration: "none",
//       textOutline: "1px #000000"
//     },
//     drillUpButton: {
//       relativeTo: "spacingBox",
//       position: {
//         x: 0,
//         y: 60
//       }
//     }
//   }
// };
// let mapData = [
//   ['in-an', 33],
//   ['in-ap', 2432],
//   ['in-ar', 1],
//   ['in-as', 103],
//   ['in-br', 1363],
//   ['in-ch', 191],
//   ['in-ct', 85],
//   ['in-dl', 10054],
//   ['in-dn', 1],
//   ['in-ga', 31],
//   ['in-gj', 11380],
//   ['in-hp', 80],
//   ['in-hr', 912],
//   ['in-jh', 223],
//   ['in-jk', 1183],
//   ['in-ka', 1231],
//   ['in-kl', 602],
//   ['in-la', 43],
//   ['in-ld', 0],
//   ['in-mh', 33053],
//   ['in-ml', 13],
//   ['in-mn', 7],
//   ['in-mp', 4977],
//   ['in-mz', 1],
//   ['in-nl', 0],
//   ['in-or', 876],
//   ['in-pb', 1964],
//   ['in-py', 17],
//   ['in-rj', 5375],
//   ['in-sk', 0],
//   ['in-tg', 1551],
//   ['in-tn', 11224],
//   ['in-tr', 165],
//   ['in-up', 4464],
//   ['in-ut', 93],
//   ['in-wb', 2677]
// ]
// Render app with demo chart
class Highmapdemo extends React.Component {
  constructor (props) {
    super(props)
    let max = this.props.max
    let maxVal = 100000
    
    this.state = {
      mapData: mapData
    //mapOptions.series.data = this.props.mapData;
    }
}
  componentDidMount () {
    //this.setMapData();
  }
  render () {
    if (this.props.stateInfo) {
      console.log(this.props.stateInfo)
      console.log(this.state.mapOptions)
      console.log('after render')
      console.log(this.state.mapOptions)
      //this.state.mapOptions.series.data = this.props.stateInfo
      //  mapOptions.series.data = this.props.mapData
      //  let maxStr = this.props.max
      //  let maxVal =parseInt(maxStr.replace(",", ""))
      //  let half = parseInt( maxVal/2);
      //  mapOptions.colorAxis.stops = [
      //   [0, '#FFFFFF'],
      //   [half, '#FF7446'],
      //   [maxVal, '	#FF0000']]
      //  console.log(mapOptions.series.data)
      //  console.log(mapOptions.colorAxis.stops)
    }
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          constructorType={"mapChart"}
        />
        {/* <HighchartsReact
          options={this.state.mapOptions}
          constructorType={'mapChart'}
          highcharts={Highcharts}
        /> */}
      </div>
    )
  }
}

export default Highmapdemo

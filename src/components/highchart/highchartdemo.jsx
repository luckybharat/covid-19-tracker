import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
class Highchartdemo extends React.Component{
    constructor(props){
        super(props)
        //map chart
        //noraml
        const options = {
          title: {
            text: 'My stock chart'
          },
          series: [
            {
              data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
            }
          ]
        };
        this.state = {
          options: options
      }
    }

    

    render(){
      const options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'My chart'
        },
        series: [
          {
            data: [1, 2, 1, 4, 3, 6]
          }
        ]
      };
        return (
          <div>
            <HighchartsReact highcharts={Highcharts} options={this.state.options} />
          </div>
        );
    }
}

export default Highchartdemo;
var stock1 = {
            x: ['2016','2017','2018','2019'],
            y: [5, 7, 19, -3],
            mode: 'lines+markers',
            name: 'Stock A',
            line: {
                color: 'rgb(28,146,46)',
                width: 4,
                shape: 'spline'
            },
            marker: {
                color: 'rgb(28,146,46)',
                size: 12
            }            

            };

var stock2 = {
            x: ['2016','2017','2018','2019'],
            y: [7, -2, 12, 2],
            mode: 'lines',
            name: 'Stock B',
            line: {
                color: 'rgb(229,53,14)',
                width: 4,
                shape: 'spline',
                dash: 'dot'
            }
            };

var stock3 = {
            x: ['2016','2017','2018','2019'],
            y: [2, 6, 3, 8],
            mode: 'markers',
            name: 'Stock C',
            marker: {
                color: 'rgb(78,103,175)',
                size: 12
            }
            };

var data = [stock1, stock2, stock3];

var layout ={
            title: 'Compared stock performances',
            xaxis: {
            tickmode: 'array',
            tickvals: ['2016','2017','2018','2019']
            }
            };

Plotly.newPlot('myViz', data, layout);

var div = {
            x: ['Stock A','Stock B'],
            y: [5,7],
            type: 'bar',
            name: 'Dividends',
            marker: {
                color: 'rgb(78,103,175)',
                opacity: 0.9
                }
            };

var ret = {
            x: ['Stock A','Stock B'],
            y: [3,4],
            type: 'bar',
            name: 'Stock Return',
            marker: {
                color: 'rgb(229,53,14)',
                opacity: 0.8
                }
            };

var data =[div, ret];

var layout = {
                title: 'Stock A vs Stock B',
                xaxis: {
                        tickangle: -45
                        },
                barmode: 'stack'
                };

Plotly.newPlot('myViz', data, layout);
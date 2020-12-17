var stock1 = {
            x: ['2016','2017','2018','2019'],
            y: [20,14,15,16],
            type: 'bar',
            name: 'Stock A',
            marker: {
                color: 'rgb(49,130,189)',
                opacity: 0.8
                }
            };

var stock2 = {
            x: ['2016','2017','2018','2019'],
            y: [17,12,17,18],
            type: 'bar',
            name: 'Stock B',
            marker: {
                color: 'rgb(204,204,204)',
                opacity: 0.5
                }
            };

var data =[stock1, stock2];

var layout = {
    title: 'Stock A vs Stock B',
    xaxis: {
            tickangle: -45
    },
    barmode: 'group'
    };

Plotly.newPlot('myViz', data, layout);
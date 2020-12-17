var data = [{
    values: [20, 10, 30, 40],
    labels: ['Energy', 'Tech','Consumer', 'Others'],
    type: 'pie',
    hole: .4,
    hoverinfo: 'label+percent'
            }];

var layout = {
    title: 'Sector Composition of Index',
    showlegend: false,
    height: 600,
    width: 600
            };

Plotly.newPlot('myViz', data, layout);
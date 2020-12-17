var data=[
    {
        name:'2020',
        type: 'waterfall',
        orientation: 'v',
        measure: [
            'relative',
            'relative',
            'total',
            'relative',
            'relative',
            'total'
            ],
        x: [
            'Sales',
            'Other revenues',
            'Net revenue',
            'Operating expenses',
            'Ohter expenses',
            'Profit before tax'
            ],
        textposition: 'outside',
        text: [
            '+60',
            '+80',
            '',
            '-40',
            '-20',
            'Total'
            ],
        y: [ 
            60,
            80,
            0,
            -40,
            -20,
            0
            ],
            connector: {
                line: { color: 'rgb(28,146,46)'}
            },
        }];

var layout = {
    title: 'PnL 2020',
    xaxis: {type: 'category'},
    yaxis: {type: 'linear'}
            };

Plotly.newPlot('myViz', data, layout)
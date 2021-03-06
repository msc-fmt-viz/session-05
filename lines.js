Plotly.d3.csv('https://raw.githubusercontent.com/mscfinance-big-data-viz/session-02/master/data/BTC-USD.csv', (err, rows) => {
    
function unpack (rows, key) {
    return rows.map(function(row) {
        return row[key];
    });
}
    var close = {
        x: unpack(rows,'Date'),
        y: unpack(rows, 'Close'),
        name: 'Close',        
        line: {color: 'blue'},
        type: 'line',
        };

    var volume = {
        x: unpack(rows,'Date'),
        y: unpack(rows, 'Volume'),
        name: 'Volume',        
        line: {color: 'green'},
        type: 'bar',
        yaxis: 'y2'
        };
    
    
    var data=[close, volume];
    
    
    var layout={
        dragmode: 'zoom',
        showlegend: 'false',
        xaxis: {
            autorange: true,
            title: 'Date',
            rangeselector: {
                x: 0,
                y: 1.2,
                xanchor: 'left',
                font: {size: 8},
                buttons: [{
                    step: 'month',
                    stepmode: 'backward',
                    count: 1,
                    label: '1 month'}, 
                          {
                    step: 'month',
                    stepmode: 'backward',
                    count: 6,
                    label: '6 months'}, 
                          {
                    step: 'month',
                    stepmode: 'backward',
                    count: 12,
                    label: '12 months'},
                          {
                    step: 'all',
                    label: 'All dates'}
                          ]
            }
            
        },
        yaxis: {autorange: true,
               title: 'USD'},
        yaxis2: {autorange: true,
               title: '# Bitcoins',
               side: 'right',
                 overlaying: 'y'}
    };
    
    Plotly.newPlot('myViz', data, layout);
});
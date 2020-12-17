Plotly.d3.csv("https://github.com/msc-fmt-viz/session-02/raw/main/data/BTC-USD.csv", function(err, rows){
    
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    

var trace = {
    x: unpack(rows, 'Date'),
    close: unpack(rows, 'Close'),
    high: unpack(rows, 'High'),
    low: unpack(rows,'Low'),
    open: unpack(rows, 'Open'),
    
    increasing: {line: {color: 'black'}},
    decreasing: {line: {color: 'red'}},
    
    type: 'candlestick',
    xaxis: 'x',
    yaxis: 'y'};

var data=[trace];

var layout={
    title: 'Bitcoin Price',
    };

Plotly.newPlot('myViz', data, layout); });
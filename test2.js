Plotly.d3.csv("https://github.com/msc-fmt-viz/session-02/raw/main/data/BTC-USD.csv", (err, rows) => {

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'Low',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'Low'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL Low',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'High'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Basic Time Series',
};

Plotly.newPlot('myViz', data, layout);
})
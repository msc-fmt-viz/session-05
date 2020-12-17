var trace1 = {
    x: [3, 6, 11],
    y: [0.2, 3, 6],
    text: ['Stock A <br> Market Cap: 140', 'Stock B <br> Market Cap: 80', 'Stock C <br> Market Cap: 120'], 
    mode: 'markers',
    marker: {
            color: ['rgb(28,146,46)','rgb(229,53,14)','rgb(78,103,175)'],
            size: [140, 80, 120]
            }
    };

var data = [trace1]

var layout = {
                title: 'Risk, Return and Market Cap'
            };

Plotly.newPlot('myViz2', data, layout);
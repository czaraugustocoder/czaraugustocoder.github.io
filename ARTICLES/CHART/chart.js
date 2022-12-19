var xValues = ["JAN-20","FEV-20","MAR-20","ABR-20","MAI-20","JUN-20","JUL-20","AGO-20","SET-20","OUT-20","NOV-20","DEZ-20","JAN-21","FEV-21","MAR-21","ABR-21","MAI-21","JUN-21","JUL-21","AGO-21","SET-21","OUT-21","NOV-21","DEZ-21","JAN-22","FEV-22","MAR-22","ABR-22","MAI-22","JUN-22","JUL-22","AGO-22","SET-22","OUT-22","NOV-22","DEZ-22","JAN-23","FEV-23","MAR-23","ABR-23","MAI-23","JUN-23","JUL-23","AGO-23","SET-23","OUT-23","NOV-23","DEZ-23"];
var yValues = [21,28,40,80,15,34,68,99,153,148,28,82,21,28,40,80,15,34,68,99,153,148,28,82,21,37,40,80,82,34,44,92,45,148,21,86,34,94,190,45,58,36,21,19,20,75,89,120];

/*
        backgroundColor: "rgb(129, 129, 204)",
        borderColor: "rgb(129, 129, 204)"
*/

var data = [{
    x: xValues,
    y: yValues,
    mode:"lines"
  }];
  
  // Define Layout
  var layout = {
    xaxis: {title: "Data"},
    yaxis: {range: [10, 200]},  
    title: "Série Histórica Fictícia"
  };
  
var config = {responsive: true}
  
  // Display using Plotly
  Plotly.newPlot("myChart", data, layout, config);



var data1 = [{
    x: xValues,
    y: yValues,
  type: "bar"  }];
var layout1 = {title:"Série Histórica Fictícia"};

var config1 = {responsive: true}

Plotly.newPlot("myNewChart", data1, layout1,config1);
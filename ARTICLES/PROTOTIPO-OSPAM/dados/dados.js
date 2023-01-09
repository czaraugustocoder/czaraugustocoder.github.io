let default_value = "ROUBO";

console.log(default_value);

const crime_data = window.crime;
console.log(crime_data);
const newCrimeData = crime_data.filter((crime, index, array) => crime.CRIME === default_value);
console.log(newCrimeData);

let xValues = newCrimeData.map(function(value) {
  return value.DATA;
});
let yValues = newCrimeData.map(function(value) {
  return value.QTD;
});

// find the max value
let max_val = Math.max(...yValues);

// find the index of highest value
let max_index = yValues.indexOf(max_val);

console.log("Max value index is: " + max_index);

let max_date = xValues[max_index];

console.log(max_date);

let maximo = document.querySelector("#maximo");
console.log(maximo);
maximo.innerHTML = max_date;

// find the min value
let min_val = Math.min(...yValues);

// find the index of min value
let min_index = yValues.indexOf(min_val);

console.log("Min value index is: " + min_index);

let min_date = xValues[min_index];

console.log(min_date);

let minima = document.querySelector("#minima");
console.log(minima);
minima.innerHTML = min_date;


// calculando a média e a soma 

let soma = 0
for(let i in yValues) {
  soma += yValues[i]
}
console.log(soma)

let mean = (soma/yValues.length);
mean_truncada = mean.toFixed(2)
console.log(mean_truncada);

let media = document.querySelector("#medM");
media.innerHTML = mean_truncada;

let acumulado = document.querySelector("#acumulado");
acumulado.innerHTML = soma;


console.log(xValues);
console.log(yValues);
/*
        backgroundColor: "rgb(129, 129, 204)",
        borderColor: "rgb(129, 129, 204)"
*/

const data = [{
    x: xValues,
    y: yValues,
    mode:"lines"
}];

  
  // Define Layout
const layout = {
    margin: {
      l: 50,
      r: 25,
      b: 75,
      t: 50,
    },
};
  
const config = {responsive: true}
  
  // Display using Plotly
Plotly.newPlot("myChart", data, layout, config);


function submit(escolhido) {
  default_value = escolhido.value;
  console.log(default_value);
  console.log(default_value);

const crime_data = window.crime;
console.log(crime_data);
const newCrimeData = crime_data.filter((crime, index, array) => crime.CRIME === default_value);
console.log(newCrimeData);
let xValues = newCrimeData.map(function(value) {
  return value.DATA;
});
let yValues = newCrimeData.map(function(value) {
  return value.QTD;
});
console.log(xValues);
console.log(yValues);

// find the max value
let max_val = Math.max(...yValues);

// find the index of highest value
let max_index = yValues.indexOf(max_val);

console.log("Max value index is: " + max_index);

let max_date = xValues[max_index];

console.log(max_date);

let maximo = document.querySelector("#maximo");
console.log(maximo);
maximo.innerHTML = max_date;

// find the min value
let min_val = Math.min(...yValues);

// find the index of min value
let min_index = yValues.indexOf(min_val);

console.log("Min value index is: " + min_index);

let min_date = xValues[min_index];

console.log(min_date);

let minima = document.querySelector("#minima");
console.log(minima);
minima.innerHTML = min_date;

let soma = 0
for(let i in yValues) {
  soma += yValues[i]
}
console.log(soma)

let mean = (soma/yValues.length);
mean_truncada = mean.toFixed(2)
console.log(mean_truncada);

let media = document.querySelector("#medM");
media.innerHTML = mean_truncada;

let acumulado = document.querySelector("#acumulado");
acumulado.innerHTML = soma;


/*
        backgroundColor: "rgb(129, 129, 204)",
        borderColor: "rgb(129, 129, 204)"
*/

const data = [{
    x: xValues,
    y: yValues,
    mode:"lines"
}];

  
  // Define Layout
const layout = {
    margin: {
      l: 50,
      r: 25,
      b: 75,
      t: 50,
    },
};
  
const config = {responsive: true}
  
  // Display using Plotly
Plotly.newPlot("myChart", data, layout, config);
}




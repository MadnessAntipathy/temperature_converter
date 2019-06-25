console.log("hello script js");

document.querySelector("#input").addEventListener("change", function(event){
  var currentInput = event.target.value;
  if (!isNaN(currentInput)){
    console.log(currentInput);
    //getting the temperature in kelvin
    var tempKelvin = kelvinConvert(currentInput);
    var tempCelsius = celsiusConvert(currentInput);
    display(tempKelvin, tempCelsius)
  } else {
    inputError();
  }
});

function display( data1, data2 ){
  var outputKelvin = document.querySelector('#output1');
  var outputCelsius = document.querySelector('#output2');
  outputKelvin.innerText = data1;
  outputCelsius.innerText = data2;
}

function inputError(){
  document.querySelector('#output1').innerText = "Please enter a number!"
  document.querySelector('#output2').innerText = "Please enter a number!"
}

function kelvinConvert(input){
  return (input-32)*(5/9) + 273.15;
}
function celsiusConvert(input){
  return (input-32)*(5/9);
}
function fahrenheitConvert(input){

}

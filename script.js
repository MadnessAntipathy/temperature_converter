console.log("hello script js");
document.getElementById("tempselector").selectedIndex = 0;
//function that gets the value of the text field and tests if it is a number and proper selection
function getValue(){
  var x = parseInt(event.target.value);
  var y = document.getElementById("tempselector").selectedIndex;
  console.log(x);
  console.log(y);
  if (y!=0){
    document.getElementById("selecterror").style.visibility = "hidden";
    if (!isNaN(x)){
      testForSelection(x,y);
    }else{
      inputError();
    }
  }else{
    selectError();
  }
}
//function that gets the name of the user and returns it when getValue function gets called
function getName(){
  var x = event.target.value;
  console.log(x);
  document.getElementById("yourname").textContent=x;
}

//function that displays the data to the field
function display(data1,data2){
  document.getElementById("output1").innerText=data1;
  document.getElementById("output2").innerText=data2;
}

//function to select which formula to use based on select option
function testForSelection(temperature,input){
  var x = parseInt(document.getElementById("input").value);
  switch (input){
    case 0:
      inputError();
    break;
    case 1:
      document.getElementById("temp1").textContent = "Degrees Fahrenheit"
      document.getElementById("temp2").textContent = "Kelvin"
      //function call will display the other two units in their respective numbers
      degreesCelsius(x);
      checkForTemp(x);
    break;
    case 2:
      document.getElementById("temp1").textContent = "Degrees Celsius"
      document.getElementById("temp2").textContent = "Kelvin"
      degreesFahrenheit(x);
      x = (x-32)*(5/9);
      checkForTemp(x);
    break;
    case 3:
      document.getElementById("temp1").textContent = "Degrees Celsius"
      document.getElementById("temp2").textContent = "Degrees Fahrenheit"
      kelvin(x);
      x = x-273.15;
      checkForTemp(x)
    break;
  };
}

//functions that handle situations when user decides to play punk
function inputError(){
  document.getElementById("output1").innerText = "Please enter a number!"
  document.getElementById("output2").innerText = "Please enter a number!"
}
function selectError(){
  document.getElementById("selecterror").style.visibility = "visible";
}
function errorDisappear(){
  document.getElementById("selecterror").style.visibility = "hidden";
}

//functions to calculate temperature based on starting temperature and advise on temperature
function degreesCelsius(input){
  var fah = input*(9/5)+32;
  var kel = input+273.15;
  display(fah,kel);
}
function degreesFahrenheit(input){
  var cel = (input-32)*(5/9);
  var kel = (input-32)*(5/9)+273.15;
  display(cel,kel);
}
function kelvin(input){
  var cel = input-273.15;
  var fah = (input-273.15)*(9/5)+32;
  display(cel,fah);
}

//function that displays recommendations if user goes out
function checkForTemp(input){
  if (input<0){
    document.getElementById("tempfeel").textContent = "You will freeze out there... Wear a towel!"
  }else if (input>=0 && input<10){
    document.getElementById("tempfeel").textContent = "It's still cold, but you will manage sunshine"
  }else if (input>=10 && input<20){
    document.getElementById("tempfeel").textContent = "Have you ever ran without sweating? It's like swimming without getting wet!"
  }else if (input>=20 && input<30){
    document.getElementById("tempfeel").textContent = "Time to lose that sweater!"
  }else if (input>=30 && input<40){
    document.getElementById("tempfeel").textContent = "Welcome to Singapore!"
  }else if (input>=40){
    document.getElementById("tempfeel").textContent = "You up for some ice cream? I know a place where..."
  }
}

//function that suggests the type of clothes to wear for the weather

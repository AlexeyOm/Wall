window.onload = function () {


  document.getElementById("validateWidth").onclick = function(evt) {validateSize(document.getElementById('wallWidth'));}
  
  document.getElementById("wallWidth").onchange = function(evt) {validateSize(document.getElementById('wallWidth'));}
  document.getElementById("wallHeight").onchange = function(evt) {validateSize(document.getElementById('wallHeight'));}
};




var alertFunc = function (){
 alert("hhhh");   
};

var submitForm = function (theForm) {
  alert (theForm["wallWidth"].value);
  return 0;
};

var validateSize = function (checkMe) {
  
  var wValue = document.getElementById(checkMe.id).value;
  
  if(wValue === ""){
   document.getElementById(checkMe.id + "-help").innerHTML = "<small> Значение не должно быть пустым </small>";
   return false;
  }
 console.log ("значение "+ checkMe.value);

  if (!/^\d+(\.|,)?\d*$/.test(document.getElementById(checkMe.id).value)) {
    document.getElementById(checkMe.id + "-help").innerHTML = "<small> Введите число </small>";
    return false;
  }
  
  return true;
  
    
};

window.onload = function () {


  document.getElementById("validateWidth").onclick = function(evt) {alert(calculateWall());};
  
  document.getElementById("wallWidth").onchange = function(evt) {validateSize(document.getElementById('wallWidth'));};
  document.getElementById("wallHeight").onchange = function(evt) {validateSize(document.getElementById('wallHeight'));};
};


var submitForm = function (theForm) {
  alert (theForm["wallWidth"].value);
  return 0;
};

var validateSize = function (checkMe) {
  
  var sizeString = document.getElementById(checkMe.id).value;
  
  if(sizeString === ""){
   document.getElementById(checkMe.id + "-help").innerHTML = "<small> Значение не должно быть пустым </small>";
   return false;
  }
 console.log ("значение "+ checkMe.value);

  if (!/^\d+(\.|,)?\d*$/.test(sizeString)) {
    document.getElementById(checkMe.id + "-help").innerHTML = "<small> Введите число </small>";
    return false;
  }
  
  return true;
  
    
};

var calculateWall = function () {
  var numPanelsWidth = 0;
  var numPanelsHorizontal = 0; 
 
  
  if(validateSize(document.getElementById('wallWidth')) && validateSize(document.getElementById('wallHeight'))) {
  //пошли все вычисления
  // для стены 46 дюймов 
  numPanelsWidth = Math.round(document.getElementById('wallWidth').value/1.024);
  numPanelsHorizontal = Math.round(document.getElementById('wallHeight').value/0.579); 
 }
  
  
 return new Array(numPanelsWidth,numPanelsHorizontal); 
  
}


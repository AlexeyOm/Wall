window.onload = function () {


  document.getElementById("validateWidth").onclick = function(evt) {outputToDiv(calculateWall());};
  
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
 //console.log ("значение "+ checkMe.value);

  if (!/^\d+\.?\d*$/.test(sizeString)) {
    document.getElementById(checkMe.id + "-help").innerHTML = "<small> Введите число </small>";
    return false;
  }
  
  document.getElementById(checkMe.id + "-help").innerHTML = "Ok";
  return true;
  
    
};

var calculateWall = function () { //фунцкция возвращает массив массивов (диагональ, количество панелей по ширине, ширина, кол-во пан. по высоте, высота)
  var numPanelsWidth = 0;
  var numPanelsHeight = 0; 
  var panelsNeeded = new Array();
  var i = 0;
  var diagSpan = document.getElementById("diagonalChecks");
  var diagChecks = diagSpan.getElementsByTagName("input");
  var numOfDiagonals = diagChecks.length;
  
  if(validateSize(document.getElementById('wallWidth')) && validateSize(document.getElementById('wallHeight'))) {
  for (i = 0; i < numOfDiagonals; i++) {
    if (diagChecks[i].checked === true ) {
      numPanelsWidth = Math.max(1, Math.round(document.getElementById('wallWidth').value/(diagChecks[i].dataset.width/1000)));
      numPanelsHeight = Math.max(1, Math.round(document.getElementById('wallHeight').value/(diagChecks[i].dataset.height/1000))); 
      console.log(diagChecks[i].dataset.height);
      panelsNeeded.push(new Array(diagChecks[i].dataset.diag, numPanelsWidth, diagChecks[i].dataset.width, numPanelsHeight, diagChecks[i].dataset.height));
    }
  }
 }
  
 return panelsNeeded; 
}

var outputToDiv = function (panelsNeeded) {
  var i = 0;
  var sizeString = "";
  
 document.getElementById("output").innerHTML = "";
  for(i = 0; i < panelsNeeded.length; i++) {
    sizeString = (panelsNeeded[i][1]*panelsNeeded[i][2]/1000).toFixed(1) + "x" + (panelsNeeded[i][3]*panelsNeeded[i][4]/1000).toFixed(1) + " метров ";
    document.getElementById("output").innerHTML += "На панелях " + panelsNeeded[i][0] + " дюймов. В ширину " + panelsNeeded[i][1] + " панелей, в длину "+ panelsNeeded[i][3] +". Размер: " + sizeString + "<br />";
  
  }
}

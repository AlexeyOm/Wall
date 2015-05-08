window.onload = function () {

 document.getElementById("helpDiv").innerHTML = "Работает";
 document.getElementById("calculateWidth").onclick = function (evt) {
   document.getElementById("helpDiv").innerHTML = "Считаем";
   calculateWidth(document.getElementById("wallWidth"));
    }

};

calculateWidth = function(sizeElement) {

  /*if(NaN(sizeElement.value)) { 
    document.getElementById("helpDiv").innerHTML = "Введите число";
  
  }
  */
  switch (true) {
    case sizeElement.value === "" : document.getElementById("helpDiv").innerHTML = "Введите значение";
                                    break;
    case isNaN(sizeElement.value)   : document.getElementById("helpDiv").innerHTML = "Введите ширину в метрах";
                                    break;
    default                       : var width = Number(sizeElement.value);
                                   // alert(width);
                                   var numPanelesWidth = Math.round(width/0.86);
                                   //alert(numPanelesWidth);
clearCanvas();                                   
drawRect(0, 0, 40*numPanelesWidth, 22);


   }


};



drawRect = function (topX, topY, length, width) {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  ctx.fillRect(topX,topY,length,width);
};

clearCanvas = function () {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
};

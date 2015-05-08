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
  var allright = 0;
  switch (true) {
    case sizeElement.value === "" : document.getElementById("helpDiv").innerHTML = "Введите значение";
									break;
    case isNaN(sizeElement.value)   : document.getElementById("helpDiv").innerHTML = "Введите ширину в метрах";
                                    break;
    default                       : allright = 1;
									var width = Number(sizeElement.value);
                                   // alert(width);
									var numPanelsWidth = Math.round(width/0.86);
									clearCanvas();
									var c = document.getElementById("myCanvas");
									var ctx = c.getContext("2d");
									ctx.clearRect(0, 0, c.width, c.height);									
									//drawRect(0, 0, 40*numPanelsWidth, 22);
									for(i = 0; i < numPanelsWidth  ;i++) {
										drawRect(Math.round(1280*(i+1)/numPanelsWidth), 0, 2, c.height);
									}


   }
   return allright;


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

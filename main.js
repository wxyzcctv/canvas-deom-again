// var canvas = document.getElementById('canvas');
// canvas.onmousedown = function(a){
//     var x = a.clientX;
//     var y = a.clientY;
//     var div = document.createElement('div');
//     div.style = "position: absolute;width: 6px;"+
//     "height: 6px;border-radius: 3px;background: black;"+
//     "left: "+ (x-3) + "px;top: " + (y-3) + "px;"
//     canvas.append(div)
// }
var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d')
var painStart = false
var lastPoint = {'x':undefined,'y':undefined}
yyy.onmousedown = function(a){
    painStart = true
    var x = a.clientX;
    var y = a.clientY;
    lastPoint = {'x':x,'y':y}
    // drawCricle(x,y,1)
}
yyy.onmousemove = function(a){

    if(painStart){
        var x = a.clientX;
        var y = a.clientY;
        var newPoint = {'x':x,'y':y};
        // drawCricle(x,y,1)
        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
        lastPoint = newPoint
    }
}
yyy.onmouseup = function(a){
    painStart = false
}
function drawCricle(x,y,radius){
    context.beginPath();
    context.strokeStyle = 'black'
    context.arc(x,y,radius,0,Math.PI*2)
    context.fill()
}
function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.strokeStyle = 'black'
    context.moveTo(x1,y1)
    context.lineWidth = 5
    context.lineTo(x2,y2)
    context.stroke()
    context.closePath()
}

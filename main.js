var yyy = document.getElementById('xxx');

setCanvasSize()

window.onresize = function(){
    this.setCanvasSize()
}

function setCanvasSize(){
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight

    yyy.width = pageWidth
    yyy.height =pageHeight
}
var context = yyy.getContext('2d')
var using = false
var lastPoint = {'x':undefined,'y':undefined}
yyy.onmousedown = function(a){
    var x = a.clientX;
    var y = a.clientY;
    using = true
    if(eraserEable){
        clearEabel(x,y)
    }else{
        lastPoint = {'x':x,'y':y}
        drawCricle(x,y,2)
    }
}
yyy.onmousemove = function(a){
    var x = a.clientX;
    var y = a.clientY;
    var newPoint = {'x':x,'y':y};
    if(using){
        if(eraserEable){
            clearEabel(lastPoint.x,lastPoint.y)
        }else{
            drawCricle(x,y,2)
            drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
        }
    }
    lastPoint = newPoint
}
yyy.onmouseup = function(a){
    using = false
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
var eraserEable = false
eraser.onclick = function(){
    eraserEable = !eraserEable
}
function clearEabel(x,y){
    context.clearRect(x-5,y-5,10,10)
}

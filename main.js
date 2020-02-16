var yyy = document.getElementById('xxx');
var context = yyy.getContext('2d')
var using = false
var lastPoint = {'x':undefined,'y':undefined}

autoSetCanvasSize(yyy)

listenToUser(yyy)

var eraserEable = false
eraser.onclick = function(){
    eraserEable = !eraserEable
    actions.className = "actions x"
}
bush.onclick = function(){
    eraserEable = !eraserEable
    actions.className = "actions"
}

/********/
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
function clearEabel(x,y){
    context.clearRect(x-5,y-5,10,10)
}
function autoSetCanvasSize(canvas){
    setCanvasSize()

    window.onresize = function(){
        setCanvasSize()
    }
    
    function setCanvasSize(){
        var pageWidth = document.documentElement.clientWidth
        var pageHeight = document.documentElement.clientHeight
    
        canvas.width = pageWidth
        canvas.height =pageHeight
    }
}
function listenToUser(canvas){
    if(document.body.ontouchstart !== undefined){
        // 触摸屏
        canvas.ontouchstart = function(a){
            var x = a.touches[0].clientX;
            var y = a.touches[0].clientY;
            using = true
            if(eraserEable){
                clearEabel(x,y)
            }else{
                lastPoint = {'x':x,'y':y}
                drawCricle(x,y,2)
            }
        }
        canvas.ontouchmove = function(a){
            var x = a.touches[0].clientX;
            var y = a.touches[0].clientY;
            var newPoint = {'x':x,'y':y};
            if(using){
                if(eraserEable){
                    clearEabel(x,y)
                }else{
                    drawCricle(x,y,2)
                    drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
                }
            }
            lastPoint = newPoint
        }
        canvas.ontouchend = function(a){
            using = false
        }
    }else{
        // 是PC端
        canvas.onmousedown = function(a){
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
        canvas.onmousemove = function(a){
            var x = a.clientX;
            var y = a.clientY;
            var newPoint = {'x':x,'y':y};
            if(using){
                if(eraserEable){
                    clearEabel(x,y)
                }else{
                    drawCricle(x,y,2)
                    drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)
                }
            }
            lastPoint = newPoint
        }
        canvas.onmouseup = function(a){
            using = false
        }
    }
    
}

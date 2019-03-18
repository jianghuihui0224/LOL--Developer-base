setTimeout(init,66);
function init(){
	var obox = document.getElementById('rollershow_box');
	var aDiv = obox.getElementsByTagName('div');
	var mainBox=document.getElementById('rollershow');
		
		for (var i = 0; i < aDiv.length; i++) {
			aDiv[i].style.background = "url(images/rollershow/"+(i+1)+".jpg) center/cover";
			aDiv[i].style.transform = "rotateY("+(i*36)+"deg) translate3d(0,0,350px)";
			aDiv[i].style.transition = "transform 1s "+(aDiv.length-i)*0.5+"s";
		}
	var desX = 0,
		desY = 0,
		tX = 0,
		tY = 10;
	mainBox.onmousedown = function(e){
		clearInterval(obox.timer);
		e = e || window.event;
		var sX = e.clientX,
			sY = e.clientY;
			this.onmousemove = function(e){
				e = e || window.event;
				var nX = e.clientX,
					nY = e.clientY;
					 // 当前点的坐标和前一点的坐标差值
					desX = nX - sX;
					desY = nY - sY;
                    tX += desX*0.1; 
                    tY += desY*0.1;

					obox.style.transform = "rotateX("+(-tY)+"deg) rotateY("+tX+"deg)";
					sX = nX;
					sY = nY;
			}
			this.onmouseup = function(){
				this.onmousemove = this.onmouseup = null;
				obox.timer = setInterval(function(){
					desX *= 0.95;
					desY *= 0.95;
					tX += desX*0.1;
					tY += desY*0.1;
					obox.style.transform = "rotateX("+(-tY)+"deg) rotateY("+tX+"deg)";
					if (Math.abs(desX)<0.5 && Math.abs(desY)<0.5) {
						clearInterval(obox.timer);
					}
				},20);
			}
		return false;
	}
}
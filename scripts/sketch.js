var opacityCnt = 0;
var navCnt = $('.nav span').length

function sketchWeb(){
	hideMover(movers[0]);
	var imgUrl 		 = canvas.toDataURL();
	var canvasHolder = $('#canvas_holder')
	canvasHolder.css('background-image', 'url('+ imgUrl +')');
	
	$('#canvas').css('opacity', 0);
	var cHeight = $('.txt_holder').outerHeight();
	var cLeft 	= $('.txt_holder').outerWidth();
	var cTop 	= $(window).height() - cHeight;
	var cWidth 	= $(window).width()  - cLeft;
	canvasHolder.animate({
		top: cTop,
		left: cLeft,
		width: cWidth,
		height: cHeight
		}, 1500, afterGrow);

}

function afterGrow(){
	var imgUrl 		 = canvas.toDataURL();
	var canvasHolder = $('#canvas_holder');
	canvasHolder.removeAttr('style');
	canvasHolder.css( 'background-image', 'url('+ imgUrl +')');
	canvasHolder.attr('class', 'after_grow');
	showContentBorder();
	
}

function showContentBorder(){
	opacityCnt +=0.01;
  	$('.content').css({'border-top-color': 'rgba(0,0,0,'+ opacityCnt +')'});
  	if (opacityCnt <1)    requestAnimationFrame(showContentBorder);
  	else
  		shoxTxtBorders();
}
  
function shoxTxtBorders(){
	opacityCnt = 0
	$('.txt').animate({opacity: 1}, 1000, showNavBorder);
}

function showNavBorder(){
	opacityCnt +=0.01;
	$('.nav').css({'border-bottom-color': 'rgba(0,0,0,'+ opacityCnt +')'});
 	if (opacityCnt <1)    requestAnimationFrame(showNavBorder);
  	else
  		showNavContent();
}

function showNavContent(){
	navCnt--;
	if (navCnt >= 0)
  		$($('.nav span')[navCnt]).animate({opacity: 1}, 1000, showNavContent);
  	else if(navCnt ==-1) {
  		opacityCnt = 0
  		showNavColor()
  	}
}
function showNavColor(){
	opacityCnt +=0.01;
	$('.nav').css({'background-color': 'rgba(0,0,0,'+ opacityCnt +')'});
 	if (opacityCnt <0.3)    requestAnimationFrame(showNavColor);
 	else{
 		opacityCnt = 0;
 		showHeader();
 	}
}

function showHeader(){
	$('.header').animate({opacity: 1}, 1000, showTextContent);
}
function showTextContent(){
	$('.txt p').animate({opacity: 1}, 1000);
}



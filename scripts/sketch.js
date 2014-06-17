var borderCnt = 0;

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
  borderCnt +=0.01;
  $('.content').css({'border-top-color': 'rgba(0,0,0,'+ borderCnt +')'});
  if (borderCnt <1)    requestAnimationFrame(showContentBorder);
  else{
  	shoxTxtBorders();
  }
}
  
function shoxTxtBorders(){
	borderCnt = 0
	$('.txt').animate({opacity: 1}, 1000, showNavBorder);
}

function showNavBorder(){
  borderCnt +=0.01;
  $('.nav').css({'border-bottom-color': 'rgba(0,0,0,'+ borderCnt +')'});
  if (borderCnt <1)    requestAnimationFrame(showNavBorder);

}
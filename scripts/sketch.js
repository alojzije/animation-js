function sketch(x, width, height){
	movers = []
	var winHeight = $(window).height() ;

	var path =  'M'+ (x-1) +','+ winHeight + ' ';
	var border1 = $(SVG('path'))
            .attr('id', 'treeBorder')
            .attr('d', path)
            .attr('stroke', '#000')
            .attr('fill', 'none')
            .appendTo($('#svg1'));

	var i = 0;
	var j = 0;
	var k = 0;
	 var intervalId = setInterval(function(){
	 	  
	 	  if (i++ < height) 		 path += 'v-' + 1 +' ';
	 	  else if (j++ < width) 	 path += 'h'  + 1 +' ';
	 	  else if (k++ < height) 	 path += 'v'  + 1 +' ';
	      else{
	        clearInterval(intervalId);
	        drawHorizontalLines();
	    }
	    border1.attr('d', path) 
	  },10);
}

function drawHorizontalLines(){
	var width  = $(window).width();
 	var height = $(window).height();
	 var path = 'M0,' +  ($("#canvas_holder").offset().top +1)+' ';

	var border1 = $(SVG('path'))
            .attr('id', 'bottomDelimiter')
            .attr('d', path)
            .attr('stroke', '#000')
            .attr('fill', 'none')
            .appendTo($('#svg1'));
    var i = 0;
   
    var intervalId = setInterval(function(){
	 	  
	 	  if (i++ < width) 		 path += 'h' + 1 +' ';
	      else{
	        clearInterval(intervalId);
	        }
	    border1.attr('d', path) 
	  },10);


}
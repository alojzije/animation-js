var movers = []
// makes SVG object <type>
function SVG(type){
   return document.createElementNS('http://www.w3.org/2000/svg', type);
}

$(document).ready(function() { 
    movers = addPredefinedMovers(); //list
});


$(window).resize(function () {
 	var width  = $(window).width();
 	var height = $(window).height();
  if ($('#treeBorder').length >0){
    var path = 'M' + ($("#canvas_holder").offset().left-1) +','+ height + ' ' +
               'v-' + (context.canvas.clientHeight+10) + ' ' +
               'h' + (context.canvas.clientWidth+1) + ' ' +
               'v' + height;

    $('#treeBorder').attr('d', path );

  }
    for (var i in movers){
        if (!movers[i].isMoving){
           // animateGravity(movers[i]);

        	movers[i].checkEdges();
        	var ry= movers[i].ry;
           	if (movers[i].position.y  < height-ry)
           		movers[i].position.y = height-ry;
           	movers[i].show();
        	reposition_canvas(movers[i].position.x, movers[i].position.y);

        }

    }
});
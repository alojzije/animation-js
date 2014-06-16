var movers = []

$(document).ready(function() { 
    movers = addPredefinedMovers(); //list
});


$(window).resize(function () {
 	var width  = $(window).width();
 	var height = $(window).height();

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
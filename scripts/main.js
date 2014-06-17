var movers = []
// makes SVG object <type>
function SVG(type){
   return document.createElementNS('http://www.w3.org/2000/svg', type);
}


function repositionMovers(){

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
          reposition_canvas(movers[i].position.x, movers[i].position.y + movers[i].ry);
        }
    }
}
$(document).ready(function() { 
    movers = addPredefinedMovers(); //list
});


$(window).resize(function () {
 	

  repositionMovers()

});
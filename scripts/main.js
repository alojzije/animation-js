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
          reposition_canvas(movers[i].position.x, movers[i].position.y+ movers[i].ry*2);
        }
    }
}
$(document).ready(function() { 
    movers = addPredefinedMovers(); //list
});


$(window).resize(function () {
 	var width  = $(window).width();
 	var height = $(window).height();
  var canvasHolder = $("#canvas_holder");
  canvasHolder.css( {'left' : width -canvasHolder.outerWidth()-1,
                     'top':  height - canvasHolder.innerHeight()+4
  });
  if ($('#treeBorder').length >0){
    var path = $('#treeBorder').attr('d');
    var path1 = 'M'  + (canvasHolder.offset().left-1) +','+ height;
    var path2 = path.substring(path.indexOf(' '))
    $('#treeBorder').attr('d', path1 +path2 );

    //$("#canvas_holder").css('left', width - $("#canvas_holder").outerWidth());


  }

  repositionMovers()

});
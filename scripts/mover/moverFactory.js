// function creates SVG element <type> (<circle> in html with (position.x, position.y)
// also function creates and returns a mover object asociated with the SVG element via uniqe ID
// mover is instantiated with a position, velocity and acceleration Vector2D and mass if supplied, otherwise default values are used
// all values (position, veloity, acc can be changed later)

function makeCircle(type, positionVect, velocityVect, accVect, mass){
    // check if position vector is supplied, if not use default, Vector2D(0,0)
    positionVect = positionVect instanceof Vector2D ? positionVect :  new Vector2D(); 
    

    var id   = 'circle' + $('circle').length;
        $(SVG(type))
            .attr('id', id)
            .attr('cx', positionVect.x)
            .attr('cy', positionVect.y)
            .attr('r' , 4)
            .attr('fill', '#000')
            .appendTo($('#svg1'));
        return new Mover('#'+id, positionVect, velocityVect, accVect, mass);
    }


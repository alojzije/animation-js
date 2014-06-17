function addPredefinedMovers(){ 
    var height = $(window).height();
    var width  = $(window).width();
    //uncomment now!
    //var m0 = makeCircle('circle', new Vector2D(0, height-10), new Vector2D(-0.004*width,-0.015*height));
    var m0 = makeCircle('circle', new Vector2D(width-400,height-1), new Vector2D(0,0));

    m0.mass = 1.4;
    animateGravity(m0); 
    return [m0];
}
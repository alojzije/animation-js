function addPredefinedMovers(){ 
    var height = $(window).height();
    var width  = $(window).width();

    var m0 = makeCircle('circle', new Vector2D(0, height-10), new Vector2D(-0.004*width,-0.015*height));
    m0.mass = 1.4;
    animateGravity(m0); 
    return [m0];
}
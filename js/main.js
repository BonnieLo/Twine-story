// Marquee
$('.marquee').marquee({
    duration: 12500,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true
});

// Geo Location Box expansion
$('.geoicon').click(function() {
    $('div.geotag').toggleClass('expand');
});

// Hero Image Displacement
/*
$('.heroimg').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 80);
    var amountMovedY = (e.pageY * -1 / 80);
    $(this).css('background-position', 'calc(50% + ' + amountMovedX + 'px) calc(50% + ' + amountMovedY + 'px)');
});
*/

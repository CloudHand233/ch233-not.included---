function coverAnimate() {
    $("#coverImg").css({"top": "0px","left": "0px"});
    $("#coverImg").animate({
        top: '-96px',
    },600);
    $("#coverImg").animate({
        left: '-167px',
    },600);
}

setInterval(coverAnimate,5500);

//cover_bg.png animate
// function coverAnimate() {
//     $("#coverImg").css({"top": "0px","left": "0px"});
//     $("#coverImg").animate({
//         top: '-96px',
//     },600);
//     $("#coverImg").animate({
//         left: '-167px',
//     },600);
// }

//cover_bg.gif animate
function coverAnimate2() {
    $("#coverImg")
        .stop().animate({
        left: '0'
    },2000)
}
function coverAnimate() {
    $("#coverImg")
        .stop().animate({
        left: '-20px'
    },2000)
}
coverAnimate();
setInterval(coverAnimate,7000);
setInterval(coverAnimate2,3000);



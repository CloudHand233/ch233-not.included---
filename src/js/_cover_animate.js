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
function coverAnimate() {
    $("#coverImg").css({"top": "0px","left": "0px"});
    $("#coverImg").animate({
        top: '-687px',
        left: '-1010px'
    },7000);
    $("#coverImg").animate({
        left: '0'
    },2000);
    $("#coverImg").animate({
        left: '-1010px'
    },1400);
}
coverAnimate();
setInterval(coverAnimate,15000);

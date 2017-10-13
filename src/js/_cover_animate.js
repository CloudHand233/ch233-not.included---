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
    $("#coverImg")
        .css({"top": "0px","left": "0px"})
        .stop().animate({
            top: '-687px',
            left: '-1010px'
        },20000)
        .stop().animate({
            left: '0'
        },2000)
        .stop().animate({
            left: '-1010px'
        },10000);
}
coverAnimate();
setInterval(coverAnimate,35000);

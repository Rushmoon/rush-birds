// var imUrl={'sky':'images/sky.png','land':'images/sky.png','pipeDown':'images/sky.png',
//     'pipeUp':'images/sky.png'};
//
// (function (w) {
//

function LodePic(imUrl,fn) {
    var imoge = {};
    var oTemp = null;
    var picnum = 0;
    var piclode = 0;
    for (var k in imUrl) {
        picnum++;
        oTemp = new Image();
        oTemp.src = imUrl[k];
        imoge[k] = oTemp;
        oTemp.onload = function () {
            piclode++;
            if (piclode === picnum) {
                fn && fn(imoge);
            }
        }
    }
}
// }
// w.LodePic=LodePic;
//
// })(window);
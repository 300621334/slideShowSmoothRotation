var btn = document.getElementById("btn");
btn.addEventListener("click", main, false);
var arrayIndex = [".a1", ".a2", ".a3", ".a4", ".a5", ".a6", ".a7", ".a8", ".a9"];
var i = [0,1,2,3,4,5,6,7,8];
function main() {
    var interval = setInterval(rotatePics, 5);
    var _1 = document.querySelector(arrayIndex[i[0]]); var _1L = 137, _1T = 620, _1H = 100, _1W = 100;
    var _2 = document.querySelector(arrayIndex[i[1]]); var _2L = 337, _2T = 620, _2H = 100, _2W = 100;
    var _3 = document.querySelector(arrayIndex[i[2]]); var _3L = 537, _3T = 620, _3H = 100, _3W = 100;
    var _4 = document.querySelector(arrayIndex[i[3]]); var _4L = 737, _4T = 620, _4H = 100, _4W = 100;
    var _5 = document.querySelector(arrayIndex[i[4]]); var _5L = 830, _5T = 500, _5H = 100, _5W = 100;
    var _6 = document.querySelector(arrayIndex[i[5]]); var _6L = 630, _6T = 300, _6H = 200, _6W = 200;
    var _7 = document.querySelector(arrayIndex[i[6]]); var _7L = 340, _7T = 0, _7H = 300, _7W = 300;
    var _8 = document.querySelector(arrayIndex[i[7]]); var _8L = 150, _8T = 300, _8H = 200, _8W = 200;
    var _9 = document.querySelector(arrayIndex[i[8]]); var _9L = 50, _9T = 500, _9H = 100, _9W = 100;

    for (var sub = 0; sub < 9; sub++)
    {
        if (i[sub] == 0)
            i[sub] = 8;
        else
            i[sub]--;
    }

var x = 0;
function rotatePics() {
    btn.removeEventListener("click", main, false);
	    if (x < 300) {
            x++;
            if (_1L < 337) { _1L = _1L + 1; _1.style.left = _1L + 'px'; }
            if (_2L < 537) { _2L = _2L + 1; _2.style.left = _2L + 'px'; }
            if (_3L < 737) { _3L = _3L + 1; _3.style.left = _3L + 'px'; }
            if (_4L < 830) { _4L = _4L + 1; _4.style.left = _4L + 'px'; }
            if (_4T > 500) { _4T = _4T - 1; _4.style.top = _4T + 'px'; }
            if (_5L > 630) { _5L = _5L - 1; _5.style.left = _5L + 'px'; }
            if (_5T > 300) { _5T = _5T - 1; _5.style.top = _5T + 'px'; }
            if (_5H < 200) { _5H = _5H + 1; _5.style.height = _5H + 'px'; }
            if (_5W < 200) { _5W = _5W + 1; _5.style.width = _5W + 'px'; }
            if (_6L > 340) { _6L = _6L - 1; _6.style.left = _6L + 'px'; }
            if (_6T > 0) { _6T = _6T - 1; _6.style.top = _6T + 'px'; }
            if (_6H < 300) { _6H = _6H + 1; _6.style.height = _6H + 'px'; }
            if (_6W < 300) { _6W = _6W + 1; _6.style.width = _6W + 'px'; }
            if (_7L > 150) { _7L = _7L - 1; _7.style.left = _7L + 'px'; }
            if (_7T < 300) { _7T = _7T + 1; _7.style.top = _7T + 'px'; }
            if (_7H > 200) { _7H = _7H - 1; _7.style.height = _7H + 'px'; }
            if (_7W > 200) { _7W = _7W - 1; _7.style.width = _7W + 'px'; }
            if (_8L > 50) { _8L = _8L - 1; _8.style.left = _8L + 'px'; }
            if (_8T < 500) { _8T = _8T + 1; _8.style.top = _8T + 'px'; }
            if (_8H > 100) { _8H = _8H - 1; _8.style.height = _8H + 'px'; }
            if (_8W > 100) { _8W = _8W - 1; _8.style.width = _8W + 'px'; }
            if (_9L < 137) { _9L = _9L + 1; _9.style.left = _9L + 'px'; }
            if (_9T < 620) { _9T = _9T + 1; _9.style.top = _9T + 'px'; }
            //if (_9H > 100) { _9H = _9h - 1; _9.style.left = _9H + 'px'; }
            //if (_9W > 100) { _9W = _9W - 1; _9.style.left = _9W + 'px'; }
        }
        else {

	        clearInterval(interval);
	        btn.addEventListener("click", main, false);
        }    
}

}




//********************Back Up**********************
//window.addEventListener("load", rotatePics, false)

//var btn = document.getElementById("btn");
//var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//btn.addEventListener("click", rotatePics, false)


//function rotatePics() {

//    var images = document.getElementsByTagName('img');
//    for (var i = 0; i < 9; i++) {
//        if (array[i] == 9)
//        { array[i] = 1; }
//        else
//        { array[i]++; }


//        images[i].src = array[i] + ".jpg";


//    }

//}
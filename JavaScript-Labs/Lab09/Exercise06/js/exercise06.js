// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* your code goes here */

// Bước 7: gắn sự kiện mouseover cho từng ô; e.target cho biết ô nào kích hoạt
window.addEventListener("load", function(){
    var divs = document.querySelectorAll(".movingDiv");
    for (i=0; i<divs.length; i++)
    {
        divs[i].addEventListener("mouseover", function (e) {
            alert("triggered by " + e.target.id);
        });
    }
});

/* Bước 2-6 và 9: đặt breakpoint ở dòng alert(...) trong tab Sources (Chrome),
   tải lại trang và xem biến e, e.target trong khung Scope/Watch. */

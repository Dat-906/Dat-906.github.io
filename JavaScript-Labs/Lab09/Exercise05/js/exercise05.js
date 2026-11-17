// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* your code goes here */

// Bước 2: chạy ngay khi script được nạp trong <head> -> lỗi vì DOM chưa sẵn sàng
// var divToGet = document.getElementById("div1");
// alert(divToGet.innerHTML);

// Bước 4: đợi sự kiện load rồi mới truy cập DOM
window.addEventListener("load", function(){
    var divToGet = document.getElementById("div1");
    alert(divToGet.innerHTML);
});

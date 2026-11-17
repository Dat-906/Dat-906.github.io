
// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* Bước 2-3: script nằm trong <head> chạy trước khi DOM được tải,
   nên getElementById("div1") trả về null và dòng sau báo lỗi trong Console. */
var divToGet = document.getElementById("div1");
alert(divToGet.innerHTML);

// define functions in this file

// this variable has global scope
var boxClass = 'movingDiv';

// Bước 1-7: hàm có tham số num và trả về chuỗi HTML
function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

/* Bước 10 (thử trong lớp): bỏ chữ var ở dòng "var box = ..." thì box trở thành biến toàn cục,
   console.log(box) ở trang HTML sẽ in được giá trị. Bản nộp giữ nguyên var vì khai báo biến
   toàn cục do quên var là nguồn gây lỗi phổ biến. */

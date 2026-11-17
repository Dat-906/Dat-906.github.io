/* code goes here */

// Bước 2: chọn phần tử theo id và gán giá trị cho textarea
var msg = document.getElementById("msgArea");
msg.value = "here is some text";

// Bước 3: đổi nội dung tiêu đề bằng innerHTML
var title = document.getElementById("pageTitle");
title.innerHTML = "New Title";

// Bước 4: viết gọn, không cần biến tạm
document.getElementById("pageTitle").innerHTML = "Even newer title";

// Bước 5: innerHTML trả về cả thẻ HTML bên trong
msg.value = document.getElementById("first").innerHTML;
console.log("Bước 5 - innerHTML của #first:\n" + msg.value);

// Bước 6: innerText chỉ trả về chữ, bỏ thẻ
msg.value = document.getElementById("first").innerText;
console.log("Bước 6 - innerText của #first:\n" + msg.value);

// Bước 7: đọc thuộc tính class
msg.value = "My class is " + msg.getAttribute("class");
console.log("Bước 7 - " + msg.value);

// Bước 8: chọn theo tên thẻ (trả về danh sách)
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";
console.log("Bước 8 - " + elem[0].value);

// Bước 9: chọn tất cả thẻ span, ghi nội dung vào textarea
elem = document.getElementsByTagName("span");
for (i=0; i<elem.length; i++) {
    document.getElementById("msgArea").value += "\n" + elem[i].innerText;
}
console.log("Bước 9 - các span:" + msg.value);

// Bước 10: chọn theo tên class
document.getElementById("msgArea").value = "";
var counts = document.getElementsByClassName("count-number");
for (i=0; i<counts.length; i++) {
    document.getElementById("msgArea").value += "\n" + counts[i].innerText;
}
console.log("Bước 10 - các count-number:" + msg.value);

// Bước 11: querySelector chỉ lấy phần tử đầu tiên khớp
var ps = document.querySelector("#first p");
document.getElementById("msgArea").value = ps.innerHTML;
console.log("Bước 11 - " + msg.value);

// Bước 12: querySelectorAll lấy tất cả phần tử khớp
ps = document.querySelectorAll("#first p");
for (i=0; i<ps.length; i++) {
    document.getElementById("msgArea").value += ps[i].innerHTML + "\n";
}
console.log("Bước 12 - " + msg.value);

// Bước 13: đổi class của textarea thành hidden (ẩn đi)
document.getElementById("msgArea").setAttribute("class", "hidden");

// Bước 14: đổi màu nền của khối #features
document.getElementById("features").style.backgroundColor = "green";

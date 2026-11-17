/* code goes here */

// Bước 5-6: nút bật/tắt đoạn nội dung, có hiệu ứng CSS3 và độ trễ
function simpleHandler(event) {
    var content = document.getElementById("content");
    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";
        // change the display mode after a 1000 millisecond delay
        setTimeout(function(){
            content.style.display = "none";
        },1000);
    }
    else {
        btn.innerHTML = "Hide";
        content.style.display = "block";

        // change the class after a 500 millisecond delay
        setTimeout(function(){
            content.className = "makeItNormal";
        },500);
    }
}

// Bước 2: gắn hàm xử lý vào sự kiện click của nút
var btn = document.getElementById("testButton");
btn.addEventListener("click", simpleHandler);

// Bước 3: rê chuột vào ảnh thì đổi sang class làm ảnh xám
var img = document.getElementById("mainImage");
/* changes the style of the image when it is moused over */
img.addEventListener("mouseover", function (event) {
    img.className = "makeItGray";
});

// Bước 4: chuột rời ảnh thì trả về bình thường
/* remove the styling when mouse leaves image */
img.addEventListener("mouseout", function (event) {
    img.className = "makeItNormal";
});

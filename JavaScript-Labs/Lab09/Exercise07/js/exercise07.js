// Bước 2: đổi màu nền ô nhập khi nhận (focus) hoặc mất (blur) con trỏ
function setBackground(e) {
    if (e.type == "focus") {
        e.target.style.backgroundColor = "#FFE393";
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }
}

// Bước 3: gắn hàm vào các ô input khi trang đã tải xong
window.addEventListener("load", function(){
    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    for (i=0; i<fields.length; i++)
    {
        fields[i].addEventListener("focus", setBackground);
        fields[i].addEventListener("blur", setBackground);
    }
});

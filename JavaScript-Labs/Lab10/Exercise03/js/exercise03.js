/* try the different advanced selection calls here */

// Bước 2: chọn mọi ô mật khẩu
$(':password').css('background-color', 'yellow');

// Bước 4: chọn phần tử con thứ 4, 8, ... bên trong form
$('form :nth-child(4n)').css('background-color', 'yellow');

// Bước 5: chọn label có chứa chữ "word"
$('label:contains("word")').css("color", "black");

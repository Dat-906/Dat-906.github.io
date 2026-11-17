/* try the different selection calls here */

// Bước 2: chọn theo id và gán giá trị
var msg = $('#msgArea');
msg.val("here is some new text");

// Bước 3: html() đọc hoặc đổi nội dung HTML của phần tử.
// Giáo trình viết $('#first').html("new Title") nhưng #first chứa cả textarea nên lệnh đó xóa luôn ô textarea;
// bản nộp đổi sang #pageTitle để các bước sau vẫn nhìn thấy kết quả.
// $('#first').html("new Title");
$('#pageTitle').html("new Title");

// Bước 4: attr() đọc hoặc đổi thuộc tính
$('#msgArea').val("My class is " + $('#msgArea').attr("class") );

// Bước 5: chọn tất cả thẻ button, không cần vòng lặp
var buttons = $('button');
buttons.css('background-color', 'red');

// Bước 6: tập chọn chỉ có một phần tử vẫn dùng css() bình thường
var temp = $('body');
temp.css("background-color", "ivory");

// Bước 7: thêm class cho các phần tử có class center-icons
$('.center-icons').addClass('selected');

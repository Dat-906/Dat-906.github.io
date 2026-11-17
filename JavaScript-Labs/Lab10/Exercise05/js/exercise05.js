/* put your DOM code here */

$(function () {
    // create a new DOM element
    var img = $('<img src="../images/art/thumbs/13030.jpg" >');
    // and now add the new element after the panel
    var panel = $('.panel');

    // Bước 2: panel.after(img);          -> chèn ngay sau panel
    // Bước 3: panel.before(img);         -> chèn ngay trước panel
    // Bước 4: panel.append(img);         -> chèn vào cuối bên trong panel
    // Bước 5: panel.prepend(img);        -> chèn vào đầu bên trong panel
    // Bước 6: img.appendTo(panel);       -> giống bước 4 nhưng viết từ phía img
    // Bước 7: img.prependTo(panel);      -> giống bước 5 nhưng viết từ phía img
    // Bước 8 (bản nộp): img.insertBefore(panel); -> giống bước 3 nhưng viết từ phía img
    img.insertBefore(panel);
});

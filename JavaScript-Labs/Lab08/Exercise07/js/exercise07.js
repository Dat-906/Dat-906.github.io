/* add code here */

// Bước 2: tạo mảng từ Mon đến Fri
var daysOfWeek = new Array("Mon","Tues","Wed","Thur", "Fri");
//document.write(daysOfWeek+"<br>");

// Bước 3: thêm Sat vào cuối mảng
daysOfWeek.push("Sat");
//document.write(daysOfWeek+"<br/>");

// Bước 4: thêm Sun vào đầu mảng
daysOfWeek.unshift("Sun");
//document.write(daysOfWeek + "<br/>");

// Bước 6-7: duyệt mảng, nhãn dài hơn 3 ký tự (Tues, Thur) in nghiêng
var i, day;
document.write("<table border=1>");
document.write("<tr>");
for (i = 0; i < daysOfWeek.length; i++) {
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

// Bước 8: các ngày từ 1 đến 30, giả sử tháng bắt đầu vào Chủ nhật
var date = 1;
for (var row = 0; row < 5; row++) {
    document.write("<tr>");
    for (var col = 0; col < daysOfWeek.length; col++) {
        if (date <= 30) {
            document.write("<td>" + date + "</td>");
            date++;
        } else {
            document.write("<td></td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");

/* Bước 2-5: nhập các lệnh sau vào Console của trình duyệt khi mở trang
   document.getElementById("first")
   document.getElementById("first").firstChild
   document.getElementById("first").firstChild.nextSibling
   document.getElementById("first").parentNode
*/

// Bước 6: duyệt các node con của #stories
var stories = document.getElementById("stories");
for (i=0;i<stories.childNodes.length; i++)
{
    console.log("child " + i + " =" + stories.childNodes[i] +
                " nodeType=" + stories.childNodes[i].nodeType);
}

// Bước 7: chỉ tô màu node phần tử (nodeType 1), bỏ qua node văn bản (nodeType 3)
for (i=0;i<stories.childNodes.length; i++)
{
    if (stories.childNodes[i].nodeType == 1) {
        stories.childNodes[i].style.backgroundColor = "#cfe8ff";
    }
}

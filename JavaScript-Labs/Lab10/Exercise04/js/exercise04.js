/* put your event code here */

/* Bước 2-4 (các cách viết trước, đã thay bằng bước 5):
$(".panel").click(function() {
    $("#message").html("You clicked in the panel");
});

$(".panel").on("click", function() {
    $("#message").html("You clicked in the panel");
});
*/

// Bước 4-5: đợi DOM sẵn sàng, gắn nhiều sự kiện nối tiếp (chaining)
$(function () {
    // chaining handlers
    $(".panel")
        .on("mousemove",function (e) {
            $("#message").html("x=" + e.pageX + " y=" + e.pageY);
        })
        .on("mouseleave",function (e) {
            $("#message").html("goodbye!");
        })
        .on("click",function () {
            $("#message").html("stopped move reporting");
            $(".panel").off("mousemove");
        });
});

/* put your animation code here */

$(function() {
    // Bước 2-4: animate() đổi dần các thuộc tính CSS; ba animate nối nhau chạy lần lượt
    $("button").click(function(){
        $("#box")
            .animate({
                left: '495px',
                opacity: '1',
                height: '50px'
            })
            .animate({top: '400px', opacity: '0.2'})
            .animate({height: '200px'}, 2000);
    });
});

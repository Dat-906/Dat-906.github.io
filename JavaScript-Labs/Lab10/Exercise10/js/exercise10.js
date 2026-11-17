$(function() {
    $('.animLoading').hide();

    // Địa chỉ gốc của giáo trình: http://www.randyconnolly.com/funwebdev/services/travel/cities.php
    // Bản nộp dùng tệp JSON cục bộ cùng cấu trúc.
    function layDuLieu(url) {
        $('.animLoading').show();
        $("#results ul").empty();

        $.get(url)
            // done will happen first
            .done(function(data) {
                $.each(data, function(index,value) {
                    var li = $('<li/>').html(value.name);
                    li.appendTo("div#results ul");
                });
            })
            // if error occurs will execute, but before always()
            .fail(function(xhr,status,error) {
                alert("failed loading data - status=" + status +
                      " error=" + error);
            })
            // always should be last
            .always(function(data) {
                $('.animLoading').fadeOut("slow");
            });
    }

    $("#consume").click(function() {
        layDuLieu("../data/cities.json");
    });

    // Thêm để kiểm tra nhánh .fail(): gọi tới một tệp không tồn tại
    $("#consumeError").click(function() {
        layDuLieu("../data/khong-ton-tai.json");
    });
});

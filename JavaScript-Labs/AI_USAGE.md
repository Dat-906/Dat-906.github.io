# AI Usage Log – JavaScript Labs (Buổi 4)

Công cụ: Claude.

## 1. Mục đích sử dụng
- Dựng thư mục `JavaScript-Labs` theo đề và chép các tệp khởi đầu từ ba gói Lab 08, 09, 10.
- Viết mã cho các Exercise theo từng bước trong tài liệu Lab.
- Soạn bản nháp trang chủ `index.html` và `README.md`.
- Rà soát lại bài làm theo đề và lập kế hoạch hoàn thành.

## 2. Prompt đã sử dụng

| Prompt | Mục đích | Kết quả AI đề xuất | Phần tôi kiểm tra và điều chỉnh |
|---|---|---|---|
| "Đây là bài tập cá nhân buổi 4. Hãy hỗ trợ tôi thực hiện chúng" (kèm đề `BaiTap_CaNhan_JS.pdf` và ba tệp zip Lab 08, 09, 10) | Thực hiện 29 Exercise và trang chủ theo đề | Thư mục `JavaScript-Labs` gồm Lab08, Lab09, Lab10, trang chủ và README. Ghi rõ các chỗ khác tài liệu: Exercise 8.1 dùng trang kiểm tra riêng; 10.9 và 10.10 đọc `cities.json` cục bộ vì web service gốc là `http`; 10.2 đổi `#first` thành `#pageTitle`; sửa lỗi thiếu dấu `;` trong `lab09.css` | Chạy từng Exercise trên GitHub Pages, tự chụp ảnh kết quả; đọc và viết lại phần giới thiệu, kiến thức đã học và tự đánh giá trên `index.html` bằng lời của mình |
| "Thực hiện rà soát lại nội dung đã thực hiện theo round. Sau khi xong thì gửi bản kế hoạch những việc cần làm. Deadline của bài này là 23h 17/11 UTC +7 (giờ VN)" | Kiểm tra lại bài trước hạn nộp | Rà theo bốn vòng (đề bài, từng Exercise, kỹ thuật, trung thực học thuật). Phát hiện chưa push lên GitHub; thêm trang `error-demo.html` cho Exercise 9.5; sửa liên kết README ở chân trang chủ; lập kế hoạch theo mốc giờ | Đọc kế hoạch, tự push theo các lệnh git và kiểm tra các trang trên GitHub Pages |
| "Thực hiện đổi tên file word thành "DuongThanhDat_31241025906_BTCN_Buoi4 trên local" | Xác nhận thông tin và bổ sung nhật ký sử dụng AI | Tệp `AI_USAGE.md` này, trình bày theo cách ghi của Buổi 2 vì đề Buổi 4 không có mẫu prompt riêng | Đọc lại, bổ sung và sửa đổi nội dung trong file word, kiểm tra lại những việc đã làm |

## 3. Phần tôi hiểu và có thể giải thích
- Khác nhau giữa `document.write()` (Lab 08) và thao tác DOM bằng `innerHTML`, `createElement`, `appendChild` (Lab 09).
- Vì sao script đặt trong `<head>` đọc `getElementById("div1")` ra `null` và phải đợi sự kiện `load` (Exercise 9.5).
- Khác nhau giữa `==` và `===`, và giữa chuỗi tạo bằng `new String` với chuỗi viết trực tiếp (Exercise 8.6).
- Cách `$.get()` với `.done()`, `.fail()`, `.always()` xử lý kết quả và lỗi (Exercise 10.10).
- Vì sao trang `https` không gọi được web service `http`, nên tôi dùng tệp JSON cục bộ (Exercise 10.9 và 10.10).

## 4. Vai trò của AI và trách nhiệm của tôi
Claude hỗ trợ viết mã theo các bước trong tài liệu Lab và soạn bản nháp. Tôi đọc lại mã, chạy thử trên trình duyệt và GitHub Pages, tự chụp ảnh minh chứng, chỉnh lại phần giới thiệu và tổng kết bằng lời của mình, và chịu trách nhiệm về nội dung nộp.

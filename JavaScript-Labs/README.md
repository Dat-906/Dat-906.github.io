# JavaScript Labs

Bài thực hành cá nhân chương 4 (JavaScript), môn **Phát triển ứng dụng TMĐT** – Đại học Kinh tế TP.HCM (UEH).
Giảng viên: TS. Nguyễn Mạnh Tuấn.

## 1. Thông tin sinh viên

| Mục | Nội dung |
|---|---|
| Họ và tên | Dương Thành Đạt |
| MSSV | 31241025906 |
| Lớp học phần | 26C1INF50902701 |
| GitHub | https://github.com/Dat-906 |
| Repository | https://github.com/Dat-906/Dat-906.github.io |
| GitHub Pages | https://dat-906.github.io/JavaScript-Labs/ |

## 2. Mục tiêu

Thực hiện đủ 29 Exercise của ba bài Lab để:

- Dùng JavaScript thuần: nhúng script, biến, hàm, mảng, đối tượng, Console (Lab 08).
- Thao tác DOM và xử lý sự kiện, kiểm tra dữ liệu form (Lab 09).
- Dùng jQuery cho selector, sự kiện, hiệu ứng và GET request (Lab 10).
- Đưa mã nguồn lên GitHub và triển khai bằng GitHub Pages.

## 3. Cấu trúc thư mục

```
JavaScript-Labs/
├── index.html            Trang chủ (thông tin cá nhân, kiến thức đã học, liên kết tới 3 Lab)
├── README.md
├── css/
│   ├── style.css         Giao diện trang chủ và các trang danh sách Lab
│   └── back.css          Liên kết nhỏ "quay lại" trong từng Exercise
├── js/
│   └── main.js           Tương tác của trang chủ (giao diện sáng/tối, tab, giỏ hàng demo, kiểm tra form)
├── images/               (avatar.svg là ảnh đại diện mặc định (chữ viết tắt ĐT); có thể thay bằng ảnh cá nhân)
├── vendor/               Bootstrap 3.3.7 và Font Awesome 4.7.0 chép về để không phụ thuộc CDN
├── Lab08/
│   ├── index.html        Danh sách Exercise 8.1 - 8.11
│   ├── css/  flags/
│   └── Exercise01 ... Exercise11/   mỗi bài: index.html (+ js/ nếu có)
├── Lab09/
│   ├── index.html        Danh sách Exercise 9.1 - 9.8
│   ├── css/  images/
│   └── Exercise01 ... Exercise08/
└── Lab10/
    ├── index.html        Danh sách Exercise 10.1 - 10.10
    ├── css/  images/  data/cities.json
    ├── js/jquery-3.1.1.min.js   bản jQuery dự phòng
    └── Exercise01 ... Exercise10/
```

Tên thư mục `ExerciseNN` khớp với số thứ tự bài trong tài liệu Lab, ví dụ `Lab09/Exercise04` là Exercise 9.4.

## 4. Nội dung từng Lab

**Lab 08 – Language Foundations (11 bài).** Bật/tắt JavaScript, script nhúng và script ngoài, `noscript`, Console, đối tượng có sẵn (`String`, `Date`, `Math`), mảng, hàm, hàm là đối tượng, tạo đối tượng và mảng các đối tượng.

**Lab 09 – DOM and Events (8 bài).** Chọn phần tử, quan hệ cha con trong DOM, tạo và xóa phần tử, sự kiện `click`/`mouseover`/`mouseout`/`load`, gỡ lỗi sự kiện, `focus`/`blur` trên form, kiểm tra ô trống khi gửi form.

**Lab 10 – jQuery (10 bài).** Nạp jQuery (CDN và bản dự phòng), selector cơ bản và nâng cao, sự kiện, chèn phần tử, hiệu ứng `fade`/`slide`, `animate`, `$.get` và `jqXHR` (`done`, `fail`, `always`).

## 5. Hướng dẫn truy cập

1. Mở trang chủ: https://dat-906.github.io/JavaScript-Labs/
2. Chọn Lab 08, Lab 09 hoặc Lab 10 để xem danh sách Exercise.
3. Bấm **Mở bài** để chạy từng Exercise, hoặc **Mã nguồn** để xem thư mục tương ứng trên GitHub.

Đường dẫn trực tiếp:

- Lab 08: https://dat-906.github.io/JavaScript-Labs/Lab08/
- Lab 09: https://dat-906.github.io/JavaScript-Labs/Lab09/
- Lab 10: https://dat-906.github.io/JavaScript-Labs/Lab10/

Để chạy trên máy: tải repository, mở `JavaScript-Labs/index.html`. Riêng Exercise 10.9 và 10.10 đọc tệp `data/cities.json` bằng `$.get`, nên cần mở qua máy chủ (ví dụ GitHub Pages hoặc Live Server trong VS Code), mở trực tiếp bằng `file://` thì trình duyệt sẽ chặn.

## 6. Ghi chú về những chỗ khác với tài liệu Lab

- **Exercise 8.1** dùng trang kiểm tra riêng trong thư mục bài, vì trang mẫu của giáo trình (`examples.funwebdev.com`) là địa chỉ `http` bên ngoài và có thể không còn hoạt động. Liên kết tới trang gốc vẫn được giữ trong bài.
- **Lab 09 và Lab 10** dùng bản Bootstrap và Font Awesome chép trong `vendor/` thay cho CDN `maxcdn.bootstrapcdn.com` của tài liệu gốc.
- **jQuery** nạp từ `https://code.jquery.com/jquery-3.1.1.min.js` (tài liệu ghi `http`, bị trình duyệt chặn trên trang `https`), kèm bản dự phòng `Lab10/js/jquery-3.1.1.min.js`.
- **Exercise 9.4** sửa lỗi thiếu dấu `;` trong `lab09.css` gốc để hiệu ứng làm xám ảnh chạy được.
- **Exercise 10.2** đổi `$('#first').html(...)` thành `$('#pageTitle').html(...)` vì lệnh gốc xóa luôn ô textarea nằm trong `#first`; lệnh gốc được giữ lại dưới dạng chú thích.
- **Exercise 10.9 và 10.10** dùng `Lab10/data/cities.json` (dữ liệu mẫu cùng cấu trúc, có trường `name`) thay cho web service `randyconnolly.com`, vì địa chỉ đó là `http` và trình duyệt chặn khi gọi từ trang `https`. Địa chỉ gốc được ghi trong chú thích của mã nguồn. Bài 10.10 có thêm nút gọi tới một tệp không tồn tại để kiểm tra nhánh `.fail()`.
- Các Exercise nối tiếp nhau trong tài liệu (ví dụ 8.2 → 8.5) được lưu thành các trang riêng; mỗi trang giữ trạng thái cuối của bước tương ứng.

## 7. Sử dụng AI

Chi tiết công cụ AI đã dùng, prompt, phần tôi kiểm tra và phần tôi hiểu nằm trong [AI_USAGE.md](AI_USAGE.md).

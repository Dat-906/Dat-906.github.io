/* JavaScript-Labs - tương tác cho trang chủ (JavaScript thuần, không dùng thư viện) */
(function () {
  "use strict";

  /* ---- Giao diện sáng/tối: nhớ lựa chọn trong localStorage (nếu trình duyệt cho phép) ---- */
  var root = document.documentElement;
  var themeBtn = document.getElementById("themeBtn");

  function layTheme() {
    try { var t = localStorage.getItem("jl-theme"); if (t) return t; } catch (e) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function datTheme(t) {
    root.setAttribute("data-theme", t);
    if (themeBtn) {
      themeBtn.textContent = t === "dark" ? "☀" : "☾";
      themeBtn.setAttribute("aria-label", t === "dark" ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối");
    }
  }
  datTheme(layTheme());
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var moi = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      datTheme(moi);
      try { localStorage.setItem("jl-theme", moi); } catch (e) {}
    });
  }

  /* ---- Menu trên điện thoại ---- */
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var mo = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", mo ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
    });
  }

  /* ---- Lời chào theo giờ ---- */
  var chao = document.getElementById("greeting");
  if (chao) {
    var gio = new Date().getHours();
    var cau = gio < 11 ? "Chào buổi sáng" : gio < 14 ? "Chào buổi trưa" : gio < 18 ? "Chào buổi chiều" : "Chào buổi tối";
    chao.textContent = cau + "! Đây là trang tổng hợp ba bài Lab JavaScript của mình.";
  }

  /* ---- Ảnh đại diện: nếu chưa có images/avatar.jpg thì dùng chữ cái đầu ---- */
  var av = document.getElementById("avatarImg");
  function duPhong() {
    var d = document.createElement("div");
    d.className = "avatar";
    d.setAttribute("role", "img");
    d.setAttribute("aria-label", "Ảnh đại diện (chữ cái viết tắt)");
    d.textContent = "ĐT";
    if (av && av.parentNode) av.parentNode.replaceChild(d, av);
  }
  if (av) {
    av.addEventListener("error", duPhong);
    if (av.complete && av.naturalWidth === 0) duPhong();
  }

  /* ---- Số liệu đếm lên khi cuộn tới ---- */
  var nho = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function demLen(el) {
    var dich = parseInt(el.getAttribute("data-count"), 10);
    if (nho || !dich) { el.textContent = dich; return; }
    var bd = null;
    function buoc(ts) {
      if (bd === null) bd = ts;
      var t = Math.min((ts - bd) / 900, 1);
      el.textContent = Math.round(dich * t);
      if (t < 1) requestAnimationFrame(buoc);
    }
    requestAnimationFrame(buoc);
  }

  /* ---- Hiện dần khi cuộn ---- */
  var reveals = document.querySelectorAll(".reveal");
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (ds) {
      ds.forEach(function (d) {
        if (!d.isIntersecting) return;
        d.target.classList.add("in");
        if (d.target.hasAttribute("data-count")) demLen(d.target);
        io.unobserve(d.target);
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
    counters.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
    counters.forEach(demLen);
  }

  /* ---- Tab "Kiến thức đã học" ---- */
  var tabs = document.querySelectorAll(".tab");
  var panels = document.querySelectorAll(".panel");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.setAttribute("aria-selected", t === tab ? "true" : "false"); });
      panels.forEach(function (p) { p.hidden = p.id !== tab.getAttribute("aria-controls"); });
    });
  });

  /* ---- Demo: giỏ hàng và kiểm tra form (ứng dụng DOM + sự kiện trong thương mại điện tử) ---- */
  var gia = { ao: 189000, balo: 459000, tainghe: 329000 };
  var soLuong = { ao: 0, balo: 0, tainghe: 0 };

  function dinhDang(n) { return n.toLocaleString("vi-VN") + " ₫"; }

  function capNhatGio() {
    var tong = 0;
    Object.keys(gia).forEach(function (ma) {
      var tien = gia[ma] * soLuong[ma];
      tong += tien;
      document.getElementById("q-" + ma).textContent = soLuong[ma];
      document.getElementById("t-" + ma).textContent = dinhDang(tien);
    });
    document.getElementById("tongTien").textContent = dinhDang(tong);
    return tong;
  }

  var shop = document.getElementById("shop");
  if (shop) {
    shop.addEventListener("click", function (e) {
      var nut = e.target.closest("button[data-ma]");
      if (!nut) return;
      var ma = nut.getAttribute("data-ma");
      var buoc = parseInt(nut.getAttribute("data-buoc"), 10);
      soLuong[ma] = Math.max(0, Math.min(99, soLuong[ma] + buoc));
      capNhatGio();
    });
    capNhatGio();
  }

  var form = document.getElementById("checkout");
  if (form) {
    var hop = document.getElementById("formMsg");
    form.addEventListener("submit", function (e) {
      e.preventDefault();                       // chặn gửi form để tự kiểm tra bằng JavaScript
      var loi = [];
      var ten = form.elements["ten"], mail = form.elements["mail"], sdt = form.elements["sdt"];
      [ten, mail, sdt].forEach(function (o) { o.classList.remove("bad"); });

      if (ten.value.trim().length < 2) { loi.push("Họ tên phải có ít nhất 2 ký tự."); ten.classList.add("bad"); }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value.trim())) { loi.push("Email chưa đúng định dạng."); mail.classList.add("bad"); }
      if (!/^0\d{9}$/.test(sdt.value.trim())) { loi.push("Số điện thoại gồm 10 chữ số và bắt đầu bằng 0."); sdt.classList.add("bad"); }
      var tong = capNhatGio();
      if (tong === 0) loi.push("Giỏ hàng đang trống, hãy chọn ít nhất một sản phẩm.");

      hop.hidden = false;
      if (loi.length) {
        hop.className = "msg err";
        hop.innerHTML = "<b>Chưa thể đặt hàng:</b><ul>" + loi.map(function (m) { return "<li>" + m + "</li>"; }).join("") + "</ul>";
      } else {
        hop.className = "msg ok";
        hop.textContent = "Đã nhận đơn thử nghiệm của " + ten.value.trim() + " với tổng tiền " + dinhDang(tong) + ". (Đây chỉ là bản demo, không có dữ liệu nào được gửi đi.)";
      }
    });
  }

  /* ---- Năm ở chân trang ---- */
  var nam = document.getElementById("year");
  if (nam) nam.textContent = new Date().getFullYear();
})();

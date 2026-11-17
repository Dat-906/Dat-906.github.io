var isCanadian = true;

/* ---------- Bước 6 (bản cuối): truyền hàm ẩn danh làm tham số ---------- */
function calculateTax(amount, tax) {
    return amount * tax();
}

function calculateTotal(price, quantity) {
    var amount = price * quantity;
    return amount + calculateTax(amount, function () {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    });
}

/* ---------- Các bước trước, giữ lại để so sánh (đặt tên riêng để không trùng) ---------- */

// Bước 1-2: taxRate() là hàm riêng
function taxRate() {
    // remember : variables defined outside of a function have global scope
    if (isCanadian) {
        return 0.05;
    } else {
        return 0.0;
    }
}
function calculateTaxStep2(amount) {
    return amount * taxRate();
}
function totalStep2(price, quantity) {
    return (price * quantity) + calculateTaxStep2(price * quantity);
}

// Bước 3: taxRate() lồng bên trong calculateTax()
function calculateTaxStep3(amount) {
    return amount * taxRate();

    function taxRate() {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    }
}
function totalStep3(price, quantity) {
    return (price * quantity) + calculateTaxStep3(price * quantity);
}

// Bước 4: hàm có tên, gán vào biến (hàm là đối tượng)
function calculateTaxStep4(amount) {
    var tax = function taxRate() {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    };
    return amount * tax();
}
function totalStep4(price, quantity) {
    return (price * quantity) + calculateTaxStep4(price * quantity);
}

// Bước 5: hàm ẩn danh (bỏ tên hàm)
function calculateTaxStep5(amount) {
    var tax = function () {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    };
    return amount * tax();
}
function totalStep5(price, quantity) {
    return (price * quantity) + calculateTaxStep5(price * quantity);
}

/* Bước 1-6: các cách tạo một đối tượng. Mỗi cách dùng một tên biến riêng để in ra cùng lúc. */

// Bước 1-3: new Object() rồi gán thuộc tính
document.write("<h3>Bước 1-3: new Object()</h3>");
var orderA = new Object();
orderA.product = "Self Portrait in a Straw Hat";
orderA.price = 15.0;
orderA.quantity = 2;
orderA.total = function() { return this.price * this.quantity; };

document.write("Product=" + orderA.product);
document.write("<br>Price=" + orderA.price);
document.write("<br>Quantity=" + orderA.quantity);
document.write("<br>Total=" + orderA.total());
// Bước 3: bỏ cặp ngoặc thì in ra nội dung hàm thay vì kết quả
document.write("<br>Total (thiếu ngoặc) = " + orderA.total);

// Bước 4-5: đối tượng rỗng {} và ký hiệu ngoặc vuông
document.write("<h3>Bước 4-5: {} và order[\"tên\"]</h3>");
var orderB = {};
orderB["product"] = "Self Portrait in a Straw Hat";
orderB["price"] = 15.0;
orderB["quantity"] = 2;
orderB["total"] = function() { return this.price * this.quantity; };
document.write("Product=" + orderB.product + " | Price=" + orderB.price +
               " | Quantity=" + orderB.quantity + " | Total=" + orderB.total());

// Bước 6: object literal
document.write("<h3>Bước 6: object literal</h3>");
var orderC = {
    product: "Self Portrait in a Straw Hat",
    price: 15.0,
    quantity: 2,
    total: function() { return this.price * this.quantity; }
};
document.write("Product=" + orderC.product + " | Price=" + orderC.price +
               " | Quantity=" + orderC.quantity + " | Total=" + orderC.total());

/* Bước 7-11: hàm khởi tạo (constructor), tạo nhiều đối tượng cùng kiểu */
function order(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.total = function() { return this.price * this.quantity; },

    this.output = function() {
        document.write("<p>Product=" + this.product);
        document.write("<br>Price=" + this.price);
        document.write("<br>Quantity=" + this.quantity);
        document.write("<br>Total=" + this.total());
    }
}

document.write("<h3>Bước 7-11: constructor order()</h3>");
var example1 = new order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new order("Untitled #23", 10, 4);

example1.output();
example2.output();

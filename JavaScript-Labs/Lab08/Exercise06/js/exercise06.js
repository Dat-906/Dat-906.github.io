/* add code below this */

// Bước 2: tạo đối tượng String
var stringOne = new String("Test");
document.write(stringOne);

// Bước 3: so sánh kiểu dữ liệu của String object và String literal
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");
document.write("<br>typeof stringOne=" + typeof stringOne);
document.write("<br>typeof stringThree=" + typeof stringThree);

// Bước 4: so sánh == và ===
if (stringOne == stringTwo)
    document.write("<br>stringOne has = value to stringTwo");
if (stringOne == stringFour)
    document.write("<br>stringOne has = value to stringFour");
if (stringOne === stringTwo)
    document.write("<br>stringOne has = value and = type to stringTwo");
if (stringTwo === stringThree)
    document.write("<br>stringTwo has = value and = type to stringThree");
if (stringTwo === stringFour)
    document.write("<br>stringTwo has = value and = type to stringThree");

// Bước 5: đối tượng Date
var dateOne = new Date();
document.write("<p>" + dateOne + "</p>");

// Bước 6: lớp Math
document.write(Math.PI+"<br/>");
document.write(Math.sqrt(4)+"<br/>");
document.write(Math.random()+"<br/>");

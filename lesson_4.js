/*
Câu 5:
Cho đoạn code định nghĩa hàm tạo thông báo đơn hàng như sau:

function createOrderMessage(user, status = "pending", ...items) {
    // Logic xử lý trả về chuoi thông báo
}
// Các trường hợp gọi hàm:
console.log(createOrderMessage("Tuan", undefined, "Laptop", "Chuột"));
console.log(create0rderMessage( "Lan", "completed"));
console.log(createOrderMessage( "Hải", null, "Bàn phím cơ"));

Yêu cầu 1: Nhận định "Khi gọi createOrderMessage("Hải", null, "Bàn phím cơ"),
tham số status sẽ tự động nhận giá trị mặc định là "pending" do null mang ý nghĩa là
không có dữ liệu" là đúng hay sai? Hãy giải thích ngăn gọn nguyên lý hoạt động.

Yêu cầu 2 (Thực hành): Viết logic bên trong thân hàm createOrderMessage. Yêu cầu
sử dụng Template Literals (*) để trả về chuỗi thông báo theo quy tắc sau:

· Nếu khách hàng có mua sản phẩm (có tham số truyền vào items), trả về:
"Khách hàng [user] có đơn hàng [status] gồm các món: [item1, item2, ... ]".
· Nếu khách hàng không truyền sản phẩm nào, trả về: "Khách hàng [user] có đơn
hàng [status] nhưng giỏ hàng trống.".
*/

/*
Câu 5:

Yêu cầu 1:
Nhận định:"Khi gọi createOrderMessage("Hải", null, "Bàn phím cơ"),
tham số status sẽ tự nhận giá trị mặc định là "pending" => Sai

Giá trị mặc định chỉ hoạt động khi tham số là undefined,
null được xem là một giá trị hợp lệ nên status = null.

Bởi vì Trong JavaScript, null là giá trị rỗng được gán vào biến và có giá trị null, 
còn undefined đại diện cho một biến đã được khai báo nhưng chưa có giá trị.
*/

// Triển khai hàm

function createOrderMessage(user, status = "pending", ...items) {

    if (items.length === 0) {
        return `Khách hàng ${user} có đơn hàng ${status} nhưng giỏ hàng trống.`;
    }

    return `Khách hàng ${user} có đơn hàng ${status} gồm các món: ${items.join(", ")}.`;
}

console.log(createOrderMessage("Tuấn", undefined, "Laptop", "Chuột"));
console.log(createOrderMessage("Lan", "completed"));
console.log(createOrderMessage("Hải", null, "Bàn phím cơ"));
/*
Câu 2:
Cho mảng dữ liệu mô phỏng được lấy về từ cơ sở dữ liệu:

const users = [
    { id: 1, role: 'admin', active: true },
    { id: 2, role: 'user', active: false },
    { id: 3, role: 'admin', active: true }
];

Yêu cầu: Nhận định "Chỉ cần dùng duy nhất hàm .map() kết hợp với câu lệnh if là có
thể trả về một mảng nguyên sạch chỉ chứa id của các user thỏa mãn điều kiện role là
'admin' và active là true" là đúng hay sai? Hãy viết một đoạn code tối ưu nhất áp dụng
Arrow Function để giải quyết bài toán lấy ra mảng id trên.
*/

/*
Nhận định "Chỉ cần dùng duy nhất hàm map() kết hợp với if
là có thể trả về mảng user thỏa mãn role = 'admin'
và active = true" => Sai

Vì map() dùng để biến đổi phần tử, không phù hợp để lọc dữ liệu.
Nên dùng filter() để lấy các phần tử thỏa điều kiện.
*/

// Triển khai code
const users = [
    { id: 1, role: 'admin', active: true },
    { id: 2, role: 'user', active: false },
    { id: 3, role: 'admin', active: true }
];

const result = users.filter(
    user => user.role === 'admin' && user.active
);

console.log(result);

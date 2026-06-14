/*
Câu 1: 
Cho đoạn code xử lý vòng lặp sau:


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

Yêu cầu: Nhận định "Đoạn code này sẽ in ra lần lượt các số 0, 1, 2"
 là đúng hay sai? Nếu sai, hãy giải thích nguyên nhân cốt lõi và viết 
 lại đoạn code bằng kiến thức ES6 để chương trình in ra đúng dãy số 0, 1, 2.
*/

/*
Sai vì var là function scope, nên khi vong lập kết thúc i = 3
setTimeout chạy sau khi vòng lặp kết thúc, lúc này i = 3 nên in ra 3 3 3.
Khai báo bằng let để mỗi lần lặp có một i riêng.
*/

// Triển khai sửa code

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
/*
Câu 3:
Yêu cầu: Nhận định "Cú pháp Spread Operator (...) khi dùng để sao chép một object
sẽ luôn tạo ra một bản sao độc lập hoàn toàn (deep copy), kể cả đối với các object 
hoặc mảng lồng nhau (nested properties)" là đúng hay sai? 

Thực hành: 
Cho const state = { user: 'Admin', privileges: ['read', 'write'] }. 
Hãy dùng cú pháp ES6 để tạo ra một object newState giữ nguyên các thông tin cũ, 
nhưng bổ sung thêm quyền 'delete' vào mảng privileges, đồng thời tuyệt đối không 
làm biến đổi (mutate) mảng privileges của object state ban đầu.
*/

/*
Nhận định:"Spread Operator (...) luôn tạo deep copy hoàn toàn" => Sai

Vì spread operator chỉ sao chép shallow copy(sao chép nông).
Các object hoặc mảng lồng nhau vẫn dùng chung tham chiếu.
*/

// Triển khai code
const state = {
    user: 'Admin',
    privileges: ['read', 'write']
};

const newState = {
    ...state,
    privileges: [...state.privileges, 'delete']
};

console.log(state);
console.log(newState);

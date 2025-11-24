var username = document.querySelector('#username');
var address = document.querySelector('#address');
var phone = document.querySelector('#phone');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#password-confirm');
var form = document.querySelector('#form');

// Hàm hiển thị lỗi
function showError(input, message) {
    var formControl = input.parentElement;
    formControl.className = 'input-box error';
    var span = formControl.querySelector('span');
    span.innerText = message;
}

// Hàm hiển thị thành công
function showSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = 'input-box success';
    var span = formControl.querySelector('span');
    span.innerText = '';
}

// 1. Chỉ giữ lại hàm kiểm tra rỗng (Bắt buộc phải nhập gì đó)
function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmptyError = true;
            showError(input, `${input.placeholder} không được để trống`);
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function saveUserData() {
    var user = {
        username: username.value,
        address: address.value,
        phone: phone.value,
        password: password.value
    };
    var json = JSON.stringify(user);
    localStorage.setItem(user.username, json);
}

// Ẩn modal khi tải trang
document.addEventListener('DOMContentLoaded', function() {
    const modalsuccess = document.querySelector('.modal-highlands');
    if(modalsuccess) {
        modalsuccess.classList.remove('active'); 
    }
}); 

// Bắt sự kiện Submit Form
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn chặn load lại trang

    // CHỈ CẦN KIỂM TRA RỖNG
    // (Bỏ qua kiểm tra độ dài, trùng khớp, số điện thoại...)
    let isEmptyError = checkEmptyError([username, address, phone, password, confirmPassword]);
    
    // Nếu không có ô nào bị trống thì cho Đăng ký luôn
    if (!isEmptyError) {
        saveUserData();
        
        // Hiện Modal Thành Công
        const modalsuccess = document.querySelector('.modal-highlands');
        if(modalsuccess) {
            modalsuccess.classList.add('active'); 
        }
    }
});
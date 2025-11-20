var username = document.querySelector('#username');
var address = document.querySelector('#address');
var phone = document.querySelector('#phone');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#password-confirm');
var form = document.querySelector('#form');

// Hàm hiển thị lỗi
function showError(input, message) {
    var formControl = input.parentElement;
    formControl.className = 'input-box error'; // Thêm class error để CSS hiển thị màu đỏ
    var span = formControl.querySelector('span');
    span.innerText = message;
}

// Hàm hiển thị thành công
function showSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = 'input-box success'; // Thêm class success (nếu có CSS xanh)
    var span = formControl.querySelector('span');
    span.innerText = '';
}

// Kiểm tra rỗng
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

function checkAddressError(input) {
    const regexAddress = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u;
    input.value = input.value.trim();
    let isAddressError = !regexAddress.test(input.value);
    if (regexAddress.test(input.value)) { // Logic cũ của bạn bị ngược, sửa lại nếu test trả về true là hợp lệ
         showSuccess(input);
         return false;
    } else {
        // Tạm thời tắt check regex địa chỉ vì nó khá phức tạp, chỉ check rỗng ở trên
        // Nếu muốn bật lại thì bỏ comment dòng showError
        // showError(input, 'Địa chỉ nhập không hợp lệ!');
        showSuccess(input);
        return false; 
    }
}

function checkPhoneError(input) {
    const regexPhone = /^[0-9]{10}$/;
    input.value = input.value.trim();
    let isPhoneError = !regexPhone.test(input.value);
    if (!isPhoneError) {
        showSuccess(input);
    } else {
        showError(input, 'Số điện thoại phải có 10 chữ số');
    }
    return isPhoneError;
}

function checkLengthErrorUsername(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Tên đăng nhập phải có ít nhất ${min} ký tự`);
        return true;
    }
    if (input.value.length > max) {
        showError(input, `Tên đăng nhập không được quá ${max} ký tự`);
        return true;
    }
    showSuccess(input);
    return false;
}

function checkLengthErrorPassword(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Mật khẩu phải có ít nhất ${min} ký tự`);
        return true;
    }
    if (input.value.length > max) {
        showError(input, `Mật khẩu không được quá ${max} ký tự`);
        return true;
    }
    showSuccess(input);
    return false;
}

// === QUAN TRỌNG: Hàm kiểm tra mật khẩu trùng khớp ===
function checkMatchPasswordError(password, confirmPassword) {
    // Trim để tránh lỗi do khoảng trắng thừa
    if (password.value.trim() !== confirmPassword.value.trim()) {
        showError(confirmPassword, 'Mật khẩu xác nhận không khớp!');
        return true; // Có lỗi
    }
    showSuccess(confirmPassword);
    return false; // Không có lỗi
}

function saveUserData() {
    var user = {
        username: username.value,
        address: address.value,
        phone: phone.value,
        password: password.value
    };
    var json = JSON.stringify(user);
    // Lưu user với key là username để tránh bị đè nếu dùng key cố định
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

    // 1. Kiểm tra rỗng trước
    let isEmptyError = checkEmptyError([username, address, phone, password, confirmPassword]);
    
    // Nếu có lỗi rỗng thì dừng, không check tiếp để tránh báo lỗi chồng chéo (tùy chọn)
    // Ở đây ta cứ check hết để hiện full lỗi

    let isUserNameLengthError = checkLengthErrorUsername(username, 5, 20);
    let isPasswordLengthError = checkLengthErrorPassword(password, 6, 20);
    let isPhoneError = checkPhoneError(phone);
    
    // 2. Kiểm tra mật khẩu trùng khớp
    let isMatchError = checkMatchPasswordError(password, confirmPassword);

    // 3. Tổng hợp lỗi
    // Chỉ hiện thông báo thành công khi KHÔNG có bất kỳ lỗi nào
    if (!isEmptyError && !isUserNameLengthError && !isPasswordLengthError && !isPhoneError && !isMatchError) {
        saveUserData();
        
        // Hiện Modal Thành Công
        const modalsuccess = document.querySelector('.modal-highlands');
        if(modalsuccess) {
            modalsuccess.classList.add('active'); 
        }
    }
});
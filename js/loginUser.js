var username = document.querySelector('#username');
var password = document.querySelector('#password');
var form = document.querySelector('form');

function showError(input, message) {
    var formControl = input.parentElement;
    formControl.className = 'input-box error';
    var span = formControl.querySelector('span');
    span.innerText = message;
}

function showSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = 'input-box success';
    var span = formControl.querySelector('span');
    span.innerText = '';
}

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

function checkLengthErrorUsername(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Tên đăng nhập phải ít nhất ${min} ký tự`);
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
        showError(input, `Mật khẩu phải có tối đa ${max} ký tự`);
        return true;
    }
    showSuccess(input);
    return false;
}

// BỎ HOÀN TOÀN HÀM CheckUserData() → LUÔN CHO QUA
// Chỉ hiện modal thành công (giả lập)

function fakeLoginSuccess() {
    const modalsuccess = document.querySelector('.modalSuccess');
    if (modalsuccess) {
        modalsuccess.classList.add('active');
        // Tự động chuyển trang sau 1.5 giây
        setTimeout(() => {
            window.location.href = '../../index_user.html'; // Hoặc trang chủ bạn muốn
        }, 1500);
    } else {
        // Nếu không có modal → chuyển luôn
        window.location.href = '../../index_user.html';
    }
}

// Xử lý submit form
const login = document.querySelector('.form');
login.addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn reload

    let isEmptyError = checkEmptyError([username, password]);
    let isUserNameLengthError = checkLengthErrorUsername(username, 5, 20);
    let isPasswordLengthError = checkLengthErrorPassword(password, 6, 20);

    // Nếu form hợp lệ → LUÔN CHO VÀO
    if (!isEmptyError && !isUserNameLengthError && !isPasswordLengthError) {
        fakeLoginSuccess(); // GIẢ LẬP ĐĂNG NHẬP THÀNH CÔNG
    }
});
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    window.location.href = 'dashboard.html';
});

document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    window.location.href = 'login.html';
});

document.getElementById('forgotPasswordForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('تم إرسال رابط إعادة تعيين كلمة السر إلى بريدك الإلكتروني');
});

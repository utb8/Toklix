// تسجيل الدخول
document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    localStorage.setItem("loggedIn", "true");
    window.location.href = "pages/dashboard.html";
});

// إنشاء حساب
document.getElementById("register-form")?.addEventListener("submit", function(event) {
    event.preventDefault();
    localStorage.setItem("loggedIn", "true");
    window.location.href = "pages/dashboard.html";
});

// تسجيل الخروج
function logout() {
    localStorage.removeItem("loggedIn");
}

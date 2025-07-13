function showLogin() {
    document.getElementById('loginBtn').classList.add('active');
    document.getElementById('registerBtn').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
}

function showRegister() {
    document.getElementById('registerBtn').classList.add('active');
    document.getElementById('loginBtn').classList.remove('active');
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showPopup("Please fill out all fields.", "error");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showPopup("Please enter a valid email address.", "error");
        return;
    }

    showPopup(`Welcome back! Login successful for ${email}`, "success");
}

function registerUser() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!name || !email || !password || !confirmPassword) {
        showPopup("Please fill out all fields.", "error");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showPopup("Please enter a valid email address.", "error");
        return;
    }

    if (password !== confirmPassword) {
        showPopup("Passwords do not match.", "error");
        return;
    }

    if (password.length < 6) {
        showPopup("Password must be at least 6 characters long.", "error");
        return;
    }

    showPopup(`🎉 Welcome ${name}! Registration successful.`, "success");
}

function showPopup(message, type = "success") {
    const popup = document.getElementById("popupMessage");
  
    const emoji = type === "error" ? "❌" : "✅";
    popup.innerHTML = `${emoji} ${message}`;
  
    popup.className = `popup-message popup-${type}`;
    popup.style.display = "block";
    popup.style.opacity = 1;

    setTimeout(() => {
        popup.style.opacity = 0;
        setTimeout(() => {
            popup.style.display = "none";
        }, 300);
    }, 3000);
}
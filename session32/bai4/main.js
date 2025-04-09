function checkEmail() {
    const email = document.getElementById("emailInput").value.trim();
    const result = document.getElementById("result");

    const isValid = email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"));

    if (isValid) {
        result.textContent = "Email hợp lệ!";
        result.style.color = "green";
    } else {
        result.textContent = "Email không hợp lệ!";
        result.style.color = "red";
    }
}
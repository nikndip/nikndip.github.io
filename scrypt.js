// Устанавливаем текущий год в футере
document.addEventListener("DOMContentLoaded", function () {
    var yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    console.log("Portfolio site loaded");
});

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const unitRadios = document.querySelectorAll("input[name='unit']");
    const totalPrice = document.getElementById("totalPrice");
    
    unitRadios.forEach(radio => {
        radio.addEventListener("change", function() {
            let price = 10.00;
            if (radio.id === "unit2") {
                price = 18.00;
            } else if (radio.id === "unit3") {
                price = 24.00;
            }
            totalPrice.textContent = `$${price.toFixed(2)} USD`;
        });
    });
});

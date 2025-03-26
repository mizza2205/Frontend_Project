document.addEventListener("DOMContentLoaded", function () {
    let unit1 = document.querySelector(".pricing_box"); 
    let unit3 = document.querySelector(".third_unit"); 
    let originalContent1 = unit1.innerHTML;
    let originalContent3 = unit3.innerHTML;

    function showUnit2Layout(unit, originalContent)
     {
        unit.classList.add("expanded");
        unit.innerHTML = `
            <style>
                .expanded {
                    width: auto !important;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: transparent;
                    border: none !important;
                    box-shadow: none !important;
                    padding: 0 !important;
                }
                .expanded .card {
                    width: 100% !important;
                    max-width: 341px !important;
                    background: #FFF9FA;
                    padding: 20px;
                    border-radius: 4px;
                    border: 0.9px solid #FF6B82;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease-in-out;
                    margin-right:20px;
                }
            </style>
            <div class="card">
                <div class="most_popular">MOST POPULAR</div>
                <div class="unit_second">
                    <input type="radio">
                    <span>2 Unit</span>
                    <span class="discount_first_unit">20% Off</span>
                </div>
                <div class="price_18">$18.00 USD </div>
                <span class="old_price_24">$24.00 USD</span>

                <div class="mid_container">
                    <div class="row">
                        <label>Size</label>
                        <label>Colour</label>
                    </div>
                    <div class="row">
                        <span>#1</span>
                        <select><option>S</option></select>
                        <select><option>Black</option></select>
                    </div>
                    <div class="row">
                        <span>#2</span>
                        <select><option>S</option></select>
                        <select><option>Colour</option></select>
                    </div>
                </div>
            </div>
        `;
    }

    function resetUnitLayout(unit, originalContent)
    {
        unit.classList.remove("expanded");
        unit.innerHTML = originalContent;
    }
    unit1.addEventListener("mouseenter", function () {
        showUnit2Layout(unit1, originalContent1);
    });
    unit1.addEventListener("mouseleave", function () {
        resetUnitLayout(unit1, originalContent1);
    });
    unit3.addEventListener("mouseenter", function () {
        showUnit2Layout(unit3, originalContent3);
    });
    unit3.addEventListener("mouseleave", function () {
        resetUnitLayout(unit3, originalContent3);
    });
});

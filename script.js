document.addEventListener("DOMContentLoaded", function () {
  // Select only the outer card-body containers to avoid duplicate event listeners
  const products = document.querySelectorAll(".list-products > .card-body");
  const totalDisplay = document.querySelector(".total");

  function updateTotal() {
    let total = 0;
    products.forEach((product) => {
      const qty = parseInt(product.querySelector(".quantity").textContent);
      const priceText = product.querySelector(".unit-price").textContent;
      // Extract number from "100 $" format
      const price = parseInt(priceText.replace(/[^0-9]/g, ""));
      total += qty * price;
    });
    totalDisplay.textContent = total + " $";
  }

  products.forEach((product) => {
    const minusBtn = product.querySelector(".fa-minus-circle");
    const plusBtn = product.querySelector(".fa-plus-circle");
    const qtyDisplay = product.querySelector(".quantity");
    const loveIcon = product.querySelector(".fa-heart");
    const deleteBtn = product.querySelector(".fa-trash-alt");

    // Plus button logic
    if (plusBtn) {
      plusBtn.addEventListener("click", () => {
        let qty = parseInt(qtyDisplay.textContent);
        qty++;
        qtyDisplay.textContent = qty;
        updateTotal();
      });
    }

    // Minus button logic
    if (minusBtn) {
      minusBtn.addEventListener("click", () => {
        let qty = parseInt(qtyDisplay.textContent);
        if (qty > 0) {
          qty--;
          qtyDisplay.textContent = qty;
          updateTotal();
        }
      });
    }

    // Love button logic - flash red color briefly
    if (loveIcon) {
      loveIcon.addEventListener("click", () => {
        // Set red color immediately
        loveIcon.style.color = "#ff0000";
        loveIcon.style.transition = "color 0.3s ease";

        // Remove red color after 300ms (matches transition duration)
        setTimeout(() => {
          loveIcon.style.color = "";
        }, 300);
      });
    }

    // Delete button logic - resets this product's quantity to 0
    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        qtyDisplay.textContent = "0";
        // Reset love icon color
        loveIcon.style.color = "";
        updateTotal();
      });
    }
  });

  // Initialize total on page load
  updateTotal();
});

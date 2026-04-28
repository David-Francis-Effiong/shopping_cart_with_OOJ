document.addEventListener("DOMContentLoaded", function () {
  // 1. Create an object class for the product
  class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  // 2. Create an object class for the shopping cart item
  class ShoppingCartItem {
    constructor(product, quantity = 1) {
      this.product = product;
      this.quantity = quantity;
    }

    // 3. Method to calculate the total price of the item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }

  // 4. Create another object class for the shopping cart
  class ShoppingCart {
    constructor() {
      this.items = []; // Array of ShoppingCartItem instances
    }

    // 5. Methods for the shopping cart
    // Get the total of items inside the cart
    getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Add items
    addItem(product, quantity = 1) {
      const existingItem = this.items.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }

    // Remove items
    removeItem(productId) {
      this.items = this.items.filter((item) => item.product.id !== productId);
    }

    // Display cart items
    displayCart() {
      if (this.items.length === 0) {
        console.log("Cart is empty");
        return;
      }
      console.log("Cart Items:");
      this.items.forEach((item) => {
        console.log(
          `- ${item.product.name} (x${item.quantity}): $${item.getTotalPrice()}`
        );
      });
      console.log(`Total Cart Price: $${this.getTotal()}`);
    }
  }

  // 6. Test the ability of our objects
  console.log("--- Testing Object Oriented Shopping Cart ---");
  // Create products
  const product1 = new Product(1, "Shoes", 100);
  const product2 = new Product(2, "Socks", 20);
  const product3 = new Product(3, "Bag", 50);

  // Create a shopping cart
  const testCart = new ShoppingCart();

  // Add items to the cart
  testCart.addItem(product1, 2);
  testCart.addItem(product2, 3);
  testCart.addItem(product3, 1);

  // Display the cart
  console.log("After adding items:");
  testCart.displayCart();

  // Remove an item from the cart
  testCart.removeItem(2); // Remove Socks
  console.log("\nAfter removing Socks (id 2):");
  testCart.displayCart();
  console.log("-------------------------------------------\n");

  // Recreating the DOM functionality with the new classes
  const domCart = new ShoppingCart();
  const totalDisplay = document.querySelector(".total");

  function updateDomTotal() {
    totalDisplay.textContent = domCart.getTotal() + " $";
  }

  const productElements = document.querySelectorAll(
    ".list-products > .card-body"
  );

  productElements.forEach((productEl, index) => {
    const title = productEl.querySelector(".card-title").textContent;
    const priceText = productEl.querySelector(".unit-price").textContent;
    const price = parseInt(priceText.replace(/[^0-9]/g, ""));
    const id = index + 1;

    // Initialize Product
    const product = new Product(id, title, price);

    // Initialize the cart with 0 quantity for the DOM items
    domCart.addItem(product, 0);

    const minusBtn = productEl.querySelector(".fa-minus-circle");
    const plusBtn = productEl.querySelector(".fa-plus-circle");
    const qtyDisplay = productEl.querySelector(".quantity");
    const loveIcon = productEl.querySelector(".fa-heart");
    const deleteBtn = productEl.querySelector(".fa-trash-alt");

    const updateItemQuantity = (newQty) => {
      qtyDisplay.textContent = newQty;
      const cartItem = domCart.items.find((item) => item.product.id === id);
      if (cartItem) {
        cartItem.quantity = newQty;
      } else {
        domCart.addItem(product, newQty);
      }
      updateDomTotal();
    };

    if (plusBtn) {
      plusBtn.addEventListener("click", () => {
        let qty = parseInt(qtyDisplay.textContent);
        qty++;
        updateItemQuantity(qty);
      });
    }

    if (minusBtn) {
      minusBtn.addEventListener("click", () => {
        let qty = parseInt(qtyDisplay.textContent);
        if (qty > 0) {
          qty--;
          updateItemQuantity(qty);
        }
      });
    }

    if (loveIcon) {
      loveIcon.addEventListener("click", () => {
        loveIcon.style.color = "#ff0000";
        loveIcon.style.transition = "color 0.3s ease";
        setTimeout(() => {
          loveIcon.style.color = "";
        }, 300);
      });
    }

    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        // Reset quantity to 0
        updateItemQuantity(0);
        loveIcon.style.color = "";
      });
    }
  });

  updateDomTotal();
});

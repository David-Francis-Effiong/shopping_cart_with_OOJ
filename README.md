# Object-Oriented Shopping Cart Project

A responsive shopping cart application built with **HTML**, **CSS (Bootstrap)**, and **JavaScript**.  
This project is an evolution of a basic DOM manipulation project, now rewritten using **Object-Oriented JavaScript (OOJ)** principles to ensure clean architecture and separation of concerns.

---

## Features

### Core Functionality
- **Quantity Management** – Adjust item quantities using intuitive "+" and "-" buttons
- **Item Removal** – Delete items from the cart with a single click
- **Interactive Favorites** – Like items using a heart-shaped button with visual feedback
- **Dynamic Total** – Real-time calculation and display of total price

### Interactive Elements
- Increment/decrement item quantities with immediate feedback
- Remove items and reset quantities to zero
- Heart icon toggles red on click
- Total price updates automatically without page reload

---

## Technologies Used
- **HTML5** – Semantic structure
- **CSS** – Custom styling & animations
- **Bootstrap 5.1.3** – Responsive grid system & UI components
- **Font Awesome 6.0** – Icons for UI
- **Object-Oriented JavaScript (ES6+)** – Classes, Methods, DOM manipulation & event handling

---

## Responsive Design
The app uses Bootstrap’s grid system for **mobile-first** responsiveness:
- **Mobile (xs)** – Single-column layout
- **Tablet (sm)** – Two-column layout
- **Desktop (lg+)** – Three-column layout

---

## Object-Oriented Architecture
This version of the project leverages modern ES6+ Classes:
1. **Product Class**: Stores product properties (`id`, `name`, `price`).
2. **ShoppingCartItem Class**: Combines a `Product` instance with a `quantity` and calculates its own total price.
3. **ShoppingCart Class**: Manages an array of items and handles cart-level logic (`getTotal`, `addItem`, `removeItem`, `displayCart`).

---

## Learning Objectives

### Object-Oriented JavaScript
1. Creating and instantiating ES6 `class` structures.
2. Managing state within objects.
3. Separation of logic (data management) from presentation (DOM manipulation).
4. Writing modular, reusable code.

### JavaScript DOM Skills
- Selecting elements with `querySelector` / `querySelectorAll`
- Hooking up class methods to DOM event listeners
- Updating `textContent` dynamically based on object state
- Manipulating classes & styles cleanly

---

## Project Structure

```
shopping-cart/
│
├── index.html       # Main HTML structure
├── script.js        # OOP JavaScript logic and DOM integration
├── style/
│   └── style.css    # Custom styles
└── assets/
    ├── shoes.png    # Product images
    ├── socks.png
    └── bag.png
```

---

## User Experience

**Visual Feedback**
- Instant quantity updates
- Heart icon turns red when liked
- Real-time total updates

**Interaction Design**
- Intuitive quantity controls
- Clear delete functionality
- Smooth, satisfying animations

---

**Learning Outcomes**

By completing this update, I was able to gain:

- Practical ES6+ Object-Oriented JavaScript (OOJ) skills
- Experience architecting classes and separating data from UI
- DOM event handling proficiency
- Clean code principles and better project organization
# Amazon Clone Project
This project is an e-commerce web application developed with vanilla JavaScript and designed to simulate the core features of a major retail platform. It transitions from procedural programming to a modular Object-Oriented (OOP) architecture, utilizing the MVC (Model-View-Controller) pattern to separate business logic from the user interface.

## Structure of Repository
```
├── backend
│   ├── products.json
├── data
│   ├── cart-class.js
│   ├── cart-oop.js
│   ├── cart.js
│   ├── deliveryOptions.js
│   ├── orders.js
│   └── products.js
├── images
│   ├── icons
│   ├── products
│   ├── ratings
├── scripts
│   ├── checkout
│   │   ├── checkoutHeader.js
│   │   ├── orderSummary.js
│   │   └── paymentSummary.js
│   ├── utils
│   │   ├── money.js
│   ├── amazon.js
│   ├── checkout.js
│   ├── orders.js
│   └── tracking.js
├── styles
│   ├── pages
│   │   ├── checkout
│   │   │   ├── checkout-header.css
│   │   │   └── checkout.css
│   │   ├── amazon.css
│   │   ├── orders.css
│   │   └── tracking.css
│   └── shared
│   │   ├── amazon-header.css
│   │   └── checkout.css
├── tests
│   ├── checkout
│   │   ├── orderSummaryTest.js
│   ├── data
│   │   ├── cartTest.js
│   │   └── prooductsTest.js
│   ├── lib
│   │   ├── jasmine
│   ├── utils
│   │   ├── moneyTest.js
│   └── tests.html
├── amazon.html
├── checkout.html
├── orders.html
├── tracking.html
└── README.md
```

## Technical Implementation
* **Architectural Design:** Refactored the codebase from procedural JavaScript to Object-Oriented Programming (OOP), utilizing classes for Product, Cart, and Order management to enhance scalability.
* MVC Pattern: Implemented a robust Model-View-Controller pattern. The data (Model) is strictly separated from the HTML generation (View), with controller scripts managing the flow of data.

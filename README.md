# Amazon Project
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
│   └── ratings
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
* **MVC Pattern:** Implemented a robust Model-View-Controller pattern. The data (Model) is strictly separated from the HTML generation (View), with controller scripts managing the flow of data.
* **Asynchronous Operations:** Integrated Async/Await and Promises to handle data fetching from the backend API, ensuring a non-blocking user experience during product loading and order placement.
* **Search Algorithm:** Engineered a search feature that utilizes URL Parameters to maintain state across page reloads. The filter logic is case-insensitive and scans both product names and keywords.
* **Real-time Tracking:** Developed a dynamic tracking page that calculates delivery progress percentages based on timestamps using the DayJS library, automatically updating the UI status (Preparing vs. Delivered).
* **Test-Driven Development:** Conducted comprehensive Unit and Integration testing using the Jasmine framework to validate critical business logic, including cart calculations and edge-case handling for backend failures.

## Key Features
* **Dynamic Cart:** Users can add items, update quantities, and remove products with real-time price and tax recalculations.
* **Checkout System:** A multi-step checkout process including shipping option selection, order summary review, and mock payment processing.
* **Order History:** A persistent order history page that retrieves past orders from LocalStorage and the backend.
* **Responsive Design:** Fully responsive layout designed using CSS Grid and Flexbox structures, optimized for desktop, tablet, and mobile interfaces.
* **Loading States:** Implemented professional loading spinners and error handling messages for network interactions.

#### Note: This project connects to supersimplebackend.dev for backend data simulation.

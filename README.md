# Amazon Clone

A functional Amazon Clone built with JavaScript, HTML, and CSS, featuring a backend for product data and unit testing with Jasmine.
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/f7ba4596-0915-49d9-bf6b-c97d63a2d73a" />




- Home Page: Browse and search for products
- Shopping Cart: Add/remove items, update quantities
- Checkout: Order summary, tax calculations, and payment simulation
- Order Tracking: Track order status and delivery updates
- Backend Integration: Fetch product and cart data dynamically
- Async/Await: Improved API handling and error management
- Automated Testing: Jasmine framework for unit testing

## Project Structure

Amazon-Clone ├── backend # Backend logic (API calls, data handling) ├── data # Product, cart, and order data ├── images # Image assets (logos, icons, product images) ├── scripts # JavaScript files for UI and logic │ ├── amazon.js # Home page functionality │ ├── checkout.js # Checkout process logic │ ├── orderSummary.js # Order summary component │ ├── paymentSummary.js # Payment and tax calculations │ ├── utils # Utility functions ├── styles # CSS files for UI design ├── tests # Jasmine test files ├── amazon.html # Main home page ├── checkout.html # Checkout page ├── orders.html # Orders page ├── tracking.html # Order tracking page ├── README.md # Project documentation



## Setup & Usage

1. Clone the repository:
git clone https://github.com/yourusername/amazon-clone.git cd amazon-clone


2. Start a local server (optional for backend features):
npm install npm start


3. Open `amazon.html` in a browser.

## Running Tests

1. Navigate to the `tests` folder.
2. Open `SpecRunner.html` in a browser.

## Recent Updates

- Added URL parameter examples
- Created order using backend
- Converted promises to async/await
- Enhanced error handling
- Switched from XHR to Fetch API
- Implemented backend for product loading
- Automated tests for cart, pricing, and checkout

## Contributing

Fork the project and submit pull requests.

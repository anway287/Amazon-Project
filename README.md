🛒 Amazon Clone

A functional Amazon Clone built with JavaScript, HTML, and CSS, featuring a backend for product data and unit testing with Jasmine. This project replicates essential e-commerce functionalities, including product browsing, cart management, order checkout, tracking, and backend integration.

🚀 Features
🛍️ Home Page: Browse and search for products.
🛒 Shopping Cart: Add/remove items, update quantities.
💳 Checkout System: Order summary, tax calculations, and payment simulation.
🚚 Order Tracking: Track order status and delivery updates.
🌐 Backend Integration: Fetch product and cart data dynamically.
⚡ Async/Await Implementation: Improved API handling and error management.
✅ Automated Testing: Jasmine framework for unit testing.

🏗 Project Structure
📦 Amazon-Clone
├── 📁 backend           # Backend logic (API calls, data handling)
├── 📁 data              # Product, cart, and order data
├── 📁 images            # Image assets (logos, icons, product images)
├── 📁 scripts           # JavaScript files for UI and logic
│   ├── amazon.js       # Home page functionality (cart, product rendering)
│   ├── checkout.js     # Checkout process logic
│   ├── orderSummary.js # Order summary component
│   ├── paymentSummary.js # Payment and tax calculations
│   ├── utils           # Utility functions (formatting, API calls)
├── 📁 styles            # CSS files for UI design
├── 📁 tests             # Jasmine test files
├── amazon.html         # Main home page
├── checkout.html       # Checkout page
├── orders.html         # Orders page
├── tracking.html       # Order tracking page
├── README.md           # Project documentation
🛠 Setup & Usage
Clone the repository:

git clone https://github.com/yourusername/amazon-clone.git
cd amazon-clone

Start a local server (optional for backend features):
npm install
npm start

Open amazon.html in a browser to explore the website.
✅ Running Tests
This project uses Jasmine for unit testing. To run tests:

Navigate to the tests folder.
Open SpecRunner.html in a browser to view results.
🔄 Recent Updates
🔥 Latest Commits (Feb 23-24, 2025)
✅ Added URL parameter examples
🚀 Created order using backend
🔄 Converted promises to async/await
⚙️ Enhanced error handling
🌐 Switched from XHR to Fetch API
📦 Implemented backend for product loading
🧪 Automated tests for cart, pricing, and checkout

# 🍔 Food Delivery Application 🚀

A complete online food ordering system that connects restaurants with customers through a modern web platform.

## 🌟 Key Features

### For Customers (Frontend)
- **Food Discovery**: Browse delicious meals with beautiful images
- **Easy Ordering**: 
  - Add items to cart with one click
  - Customize orders (e.g., special instructions)
  - Secure checkout process
- **Order Tracking**: 
  - Real-time status updates
  - Estimated delivery time
- **Account Management**:
  - Secure login/signup
  - Order history
  - Saved addresses

### For Restaurant Owners (Admin Panel)
- **Order Management**:
  - View incoming orders
  - Update order status (Preparing → Ready → Delivered)
  - Print order receipts
- **Menu Control**:
  - Add/remove menu items
  - Update prices and descriptions
  - Manage food categories
- **Business Insights**:
  - Sales reports and analytics
  - Popular items tracking
  - Customer feedback

### Backend Services
- **Reliable API** that powers both frontend and admin
- **Secure authentication** for users and admins
- **Database management** for:
  - User accounts
  - Menu items
  - Orders
  - Payments
- **Image hosting** for food photos

## 🛠 Payment Options
- **Stripe Payment Gateway**: Secure online payments for orders.
- **Cash on Delivery**: Option for customers to pay upon receiving their orders.

| Component       | Technologies                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| **Frontend**    | React.js, Vite, CSS Modules, Context API                                    |
| **Admin Panel** | React.js, Vite, Custom Admin Components                                     |
| **Backend**     | Node.js, Express.js, MongoDB (Mongoose), JWT Authentication                 |
| **Deployment**  | Can be deployed on platforms like Vercel, Netlify, or traditional hosting   |

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (version 16 or higher)
- MongoDB account (free tier available)
- Git for version control

### 2. Installation Guide

#### Clone the repository
```bash
git clone https://github.com/sahilsonvane/food-delivery-app.git
cd food-delivery-app
```

#### Install dependencies
Run these commands in separate terminals:

```bash
# Frontend
cd frontend
npm install

# Admin Panel
cd ../admin
npm install

# Backend
cd ../backend
npm install
```

#### Configure Environment
Create `.env` file in `/backend` with:

```env
JWT_SECRET = "rondom#secret" // jwt_secret you can change it if needed
STRIPE_SECRET_KEY = "sk_test_key" // create an free account and get test key for payment gateway
FRONTEND_URL = "http://localhost:5174" // frontend url change it if needed
DB_URL = 'mongodb+srv://username:password@cluster.mongodb.net/dbname' // create an free account and get url for database
```

#### Update the urls in frontend and admin panel
go to `StoreContext.jsx` file in `/frontend/src/context/StoreContext.jsx` and `App.jsx` file in `/admin/src/App.jsx` update the following url variables with your current domain:

```bash
# find following url variable in both file and update it

const url = "http://localhost:5173" # update with your current admin domain
const url = "http://localhost:5174" # update with your current frontend domain

```

## 🏃 Running the Application

1. **Start Backend Server** (required first)
```bash
cd backend
npm start
```

2. **Launch Customer App**
```bash
cd ../frontend
npm run dev
```

3. **Open Admin Panel**
```bash
cd ../admin
npm run dev
```

## 📂 Project Structure Explained

```
food-delivery-app/
├── admin/                # Restaurant owner's control panel
│   ├── src/pages/        # Different admin screens
│   │   ├── Dashboard/    # Business overview
│   │   ├── Orders/       # Manage orders
│   │   └── Menu/        # Edit food items
│   └── ...               
│
├── backend/              # The brain of the operation
│   ├── routes/           # API endpoints
│   │   ├── userRoute.js  # Account management
│   │   ├── foodRoute.js  # Menu items
│   │   └── orderRoute.js # Orders
│   └── ...               
│
└── frontend/             # Customer-facing app
    ├── src/pages/        # Customer screens
    │   ├── Home/         # Browse menu
    │   ├── Cart/         # Checkout
    │   └── Orders/       # Past orders
    └── ...               
```

## 📸 Application Screenshots

## Frontend Login/Signup Page :
![Portfolio Screenshot](./screenshots/login-signup.png)
## Frontend Home Page :
![Portfolio Screenshot](./screenshots/app-screenshot.png)
## Frontend All Products Section :
![Portfolio Screenshot](./screenshots/products-page.png)
## Frontend Single Product Page :
![Portfolio Screenshot](./screenshots/singe-product-page.png)

## Frontend Single Cart Page :
![Portfolio Screenshot](./screenshots/cart-page.png)
## Frontend Single Checkout Page :
![Portfolio Screenshot](./screenshots/delivery-info-checkout.png)
## Frontend Single Payment Gateway Page :
![Portfolio Screenshot](./screenshots/payment-page.png)
## Frontend Single My Orders Page :
![Portfolio Screenshot](./screenshots/my-orders-page.png)

## Admin Dashboard :
![Portfolio Screenshot](./screenshots/admin-dashboard.png)
## Admin Add Food :
![Portfolio Screenshot](./screenshots/admin-add-food.png)
## Admin List Foods :
![Portfolio Screenshot](./screenshots/admin-list-foods.png)
## Admin Orders :
![Portfolio Screenshot](./screenshots/admin-orders.png)




## 💡 Need Help?

For support or questions:
- Email: sahilsonvane24@gmail.com


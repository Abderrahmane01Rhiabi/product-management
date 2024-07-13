
# Product Management API

## Description

A simple RESTful API built with Node.js and Express for managing products using MongoDB. This project enables users to create, read, update, and delete product data efficiently.

## Features

-   Full CRUD functionality for products
-   MongoDB connection for robust data storage
-   Basic authentication using JWT (JSON Web Tokens)
-   Real-time updates via WebSocket (Socket.io)
-   Frontend application developed with React and Material UI

## Tech Stack

-   **Backend:** Node.js, Express, MongoDB, Mongoose
-   **Frontend:** React, Material UI, Redux (not yet)
-   **WebSocket:** Socket.io
-   **Authentication:** JWT (not yet)

## Getting Started

### Prerequisites

-   Node.js (version 14.x or higher)
-   MongoDB (installed and running)

### Installation

1.  Clone the repository:
    
    `git clone https://github.com/yourusername/product-management.git
    cd product-management` 
    
2.  Install dependencies:
    
    `npm install` 
    
3.  Create a `.env` file in the root directory and add the following:
    
`MONGODB_URI=mongodb://127.0.0.1:27017/product_management
    PORT=5000` 
    

### Running the Application (Backend)

1.  Start the MongoDB service if it's not running:
    
    `net start MongoDB` 
    
2.  Start the server:
    
    `npm run dev` 
    
3.  Open your browser and navigate to `http://localhost:5000`.
    

### API Endpoints

-   **GET** `/products` - Retrieve all products
-   **POST** `/products` - Create a new product
-   **PUT** `/products/:id` - Update an existing product
-   **DELETE** `/products/:id` - Delete a product

### Frontend

To run the frontend application, navigate to the frontend directory (if applicable) and follow the same installation steps. Then start the React app:

`npm start` 

## License

This project is licensed under the MIT License.

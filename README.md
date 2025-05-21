# Inventory Backend

1. *Project Description*: A backend service built with Node.js and Express for managing products in an inventory system. It supports creating, reading, updating, and deleting product details stored in MongoDB.

2. *Features*:
   - Add new products
   - Update existing products
   - Delete products
   - View all products
   - View individual product details

3. *Tech Stack*:
   - Node.js (JavaScript runtime)
   - Express.js (Backend framework)
   - MongoDB (Database)
   - Mongoose (MongoDB ODM)
   - dotenv (Environment variable manager)

4. *Installation Steps*:
   - Clone the repository: git clone https://github.com/saniyasshetty/inventory-backend.git
   - Navigate to project folder: cd inventory-backend
   - Ensure folder contains: controllers/, models/, routes/, .env, package.json, server.js
   - Install dependencies: npm install
   - Create a .env file and add:
     
     DB_URI=mongodb://localhost:27017/inventory
     PORT=5000
     
   - Start the server: npm start
   - Server runs at: http://localhost:5000

5. *API Endpoints*:
   - GET /products: Returns a list of all products
   - POST /products: Adds a new product with JSON body:
     
     {
       "name": "New Product",
       "quantity": 20,
       "price": 15.99
     }
     
   - PUT /products/:id: Updates a product by ID with body:
     
     {
       "name": "Updated Product",
       "quantity": 120,
       "price": 25.99
     }
     
   - DELETE /products/:id: Deletes a product and returns:
     
     {
       "message": "Product deleted successfully"
     }
     

6. *Contributing*:
   - Fork the repo
   - Create a branch: git checkout -b feature-name
   - Make your changes
   - Commit: git commit -m "Add new feature"
   - Push: git push origin feature-name
   - Create a Pull Request

7. *License*: This project is licensed under the MIT License. Refer to the LICENSE file for details.


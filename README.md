
# E-Commerce Backend API

This is a backend API for an e-commerce platform, providing various endpoints for managing products, categories, carts, orders, and user authentication.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- Category and Product Listing
- Product Details
- Cart Management
- Order Placement and History
- User Authentication

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running instance or connection string)
- npm or yarn package manager

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ecommerce-backend.git
   cd ecommerce-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and set the following environment variables:

   ```dotenv
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=yourSecretKey
   ```

2. Make sure you have MongoDB up and running.

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The server will be running at `http://localhost:5000`.

## API Documentation

API documentation is available in the [Swagger UI](http://localhost:3000/api-docs) after starting the server.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md) when submitting pull requests.


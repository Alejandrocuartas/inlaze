# inlaze-back

## Description

`inlaze-back` is a backend API for the Inlaze project.

## Installation

1. Clone the repository to your local machine:

    git clone https://github.com/Alejandrocuartas/inlaze.git

2. Navigate to the root directory of the repository:

    cd backend

3. Create a `.env` file in the root directory of the repository and fill it with the appropriate environmental variables:

    MONGODB_URI=<your MongoDB URI>  
    PORT=<the port number you want to use>  
    ORIGIN=<the origin URL for CORS>  
    JWT_KEY=<your JWT secret key>

4. Install the dependencies:

    npm install

## Usage

### Development Mode
To start the development server, run the following command:

npm run dev

This will start the server using `ts-node`.

### Production Mode
To build the project and start the server in production mode, run the following commands:

npm run build
npm start

This will build the project using TypeScript and start the server using the built JavaScript files.

## Dependencies

The following dependencies are used in this project:

- bcryptjs (password encryption)
- cors
- dotenv
- express
- express-validator (routing validations)
- jsonwebtoken (JWT authentication)
- mongoose (MongoDB ODM)
- rimraf

# inlaze-front

## Description

`inlaze-front` is the frontend application for the Inlaze project.

## Installation

1. Navigate to the root directory of the repository:

    cd frontend

2. Install the dependencies:

    npm install


## Usage

### Development Mode
To start the development server with the backend API running on `http://localhost:3000`, run the following command:

npm start

This will start the `webpack-dev-server` and automatically open the application in your default browser.

### Production Mode
To build the project for production and serve the built files, run the following command:

npm run build

This will create a `build` folder containing the built files that can be deployed to a production server.

## Dependencies

The following dependencies are used in this project:

- react
- react-dom
- react-router-dom

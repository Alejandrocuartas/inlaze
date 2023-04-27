# inlaze-back

## Description

`inlaze-back` is a backend API for the Inlaze project.

## Installation

1. Clone the repository to your local machine:

git clone https://github.com/your-username/inlaze-back.git

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

- bcryptjs
- cors
- dotenv
- express
- express-validator
- jsonwebtoken
- mongoose
- rimraf

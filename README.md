# React Authentication App

This project is a React application demonstrating user authentication, protected routes, dynamic user data fetching using Axios, and notifications using `react-toastify`. The application is styled using Tailwind CSS and provides smooth animations with Framer Motion. User data is mocked using Mock Service Worker (MSW), allowing for seamless API mocking in development.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Mocked API Endpoints](#mocked-api-routes)
- [Tech Stack](#tech-stack)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Sirawit44/Solidithai-test.git
   ```

2. **Navigate to the project directory**:

    ```bash
    cd Solidithai-test
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Start the development server**:

    ```bash
    npm start
    ```

5. **The app will run on http://localhost:5173**:

## Usage
The following are the main routes available in the application:

- **`/login` (Login Page)**  
  **Purpose**: Allows users to log in using their credentials.  
  **Access**: Public, but users are redirected to the dashboard after login.  
  **Functionality**:  
  - Users input their email and password.  
  - If already logged in, users are redirected to the dashboard automatically.
  **Usage due to Mocked API**:  

  ```text
    email: 'admin@example.com',
    password: '123456'
  ```

- **`/register` (Register Page)**  
  **Purpose**: Allows new users to create an account.  
  **Access**: Public.  
  **Functionality**:  
  - Users can sign up by providing name, email, and password.  
  - After successful registration, users are redirected to the dashboard.

- **`/` (Dashboard)**  
  **Purpose**: The main page after logging in, showing an overview of user-specific information.  
  **Access**: Protected (only accessible by authenticated users).  
  **Functionality**:  
  - Displays the user’s dashboard.  
  - Redirects to `/login` if the user is not authenticated.

- **`/users/:id` (User Details)**  
  **Purpose**: Shows detailed information for a specific user based on their ID.  
  **Access**: Protected (only accessible by authenticated users).  
  **Functionality**:  
  - The `:id` represents the user’s unique ID.  
  - Displays the user's details like name, email, gender, and age.  
  - Shows a "User Not Found" message if the ID is invalid.

- **`*` (404 Not Found)**  
  **Purpose**: Shows a 404 error page when a route does not exist.  
  **Access**: Public.  
  **Functionality**:  
  - Displays an error page if the user navigates to an invalid route.

## Mocked API Endpoints

  The following API endpoints are mocked:

- `POST /api/login`: Authenticates a user based on email and password.
- `POST /api/register`: Registers a new user.
- `GET /api/users`: Retrieves a list of users.
- `GET /api/users/:id`: Retrieves a single user by ID.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript.
- **React Router**: Declarative routing for React apps.
- **Axios**: Promise-based HTTP client for the browser.
- **Tailwind CSS**: Utility-first CSS framework for responsive designs.
- **React Toastify**: Notifications for React applications.
- **Framer Motion**: A powerful animation library for React.
- **Mock Service Worker (MSW)**: API mocking for testing without backend.
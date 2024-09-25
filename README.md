# React Authentication App

This project is a React application demonstrating user authentication, protected routes, dynamic user data fetching using Axios, and notifications using `react-toastify`. The application is styled using Tailwind CSS and provides smooth animations with Framer Motion. User data is mocked using Mock Service Worker (MSW), allowing for seamless API mocking in development.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Protected Routes](#protected-routes)
  - [User Details](#user-details)


## Features

- **User Authentication**: Login and registration flows with authenticated routes.
- **Protected Routes**: Redirects unauthorized users to login page.
- **Axios API Integration**: Using Axios to fetch data from a mocked API.
- **User Details Page**: Displays user information based on dynamic routes (`/user/:id`).
- **Loading Animations**: Framer Motion is used to create smooth animated loading indicators.
- **Responsive UI**: Styled with Tailwind CSS for a clean, responsive design.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript.
- **React Router**: Declarative routing for React apps.
- **Axios**: Promise-based HTTP client for the browser.
- **Tailwind CSS**: Utility-first CSS framework for responsive designs.
- **React Toastify**: Notifications for React applications.
- **Framer Motion**: A powerful animation library for React.
- **Mock Service Worker (MSW)**: API mocking for testing without backend.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Sirawit44/Solidithai-test.git
   ```

2. **Navigate to the project directory**:

  ```bash
   cd react-auth-app
  ```

3. **Install dependencies**:

  ```bash
   npm install
  ```

4. **Start the development server**:

  ```bash
   npm start
  ```
  
The app will run on http://localhost:5173
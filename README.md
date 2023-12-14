# Sxodim KBTU Event Management System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Sxodim KBTU Event Management System is a web application designed to streamline the process of event management at KBTU (Kazakh-British Technical University). The platform allows users to easily view, register for events, login and register to the system, edit their account details, and search for upcoming events. The system leverages Firebase for user authentication, ensuring a secure and seamless experience for users.

## Features

1. **User Authentication:**
   - Users can register for a new account or log in to an existing one.
   - Firebase authentication ensures a secure and reliable user management system.

2. **Event Registration:**
   - Users can browse through a list of upcoming events.
   - Register for events they are interested in attending.

3. **Account Management:**
   - Edit personal details and preferences.
   - Change passwords and update profile information.

4. **Event Search:**
   - Search for specific events based on keywords.

## Installation

To set up the Sxodim KBTU Event Management System locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/sarsembek/SxodimKBTU_front.git
2. Install dependencies:
    ```bash
    npm install
3. Configure Firebase:
   1. **Create a Firebase project on the [Firebase Console]   (https://console.firebase.google.com/):**
   - Visit the Firebase Console and click on "Add Project."
   - Follow the on-screen instructions to set up your project.
   2. **Obtain the Firebase configuration credentials:**
   - Once your project is created, navigate to the project settings.
   - In the settings, scroll down to the "Your apps" section and select the web app you created.
   - Copy the configuration object provided, which includes apiKey, authDomain, projectId, storageBucket, messagingSenderId, and appId.

    3. **Update the Firebase configuration in the project (e.g., `src/firebase/config.js`):**
    - Open the Firebase configuration file in your project (e.g., `src/firebase/config.js`).
    - Replace the placeholder values with the actual Firebase configuration values you obtained in the previous step.
4. Run the application:
    ```bash
    npm run dev
5. Open the application in your browser at:
    http://localhost:5173/

## Usage

- Visit the website and sign in or register to access the event management features.
- Browse through the list of upcoming events and register for those of interest.
- Manage your account settings and preferences.
- Use the search functionality to find specific events.

## Technologies Used
[![React](https://img.shields.io/badge/React-17-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-2-green?logo=vite)](https://vitejs.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-auth-orange?logo=firebase)](https://firebase.google.com/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.5-brightgreen?logo=spring)](https://spring.io/projects/spring-boot)
[![Firestore](https://img.shields.io/badge/Firestore-database-yellow?logo=firebase)](https://firebase.google.com/products/firestore)

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Firebase Authentication](https://firebase.google.com/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Firestore](https://firebase.google.com/products/firestore)

## Contributing

Contributions are welcome! Please follow our [Contribution Guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details.

# Cryptelligence Test Mobile

This is the mobile application for the Cryptelligence project. It is built using React Native with Expo and utilizes MobX for state management.

## Table of Contents

- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [Features and Improvements](#features-and-improvements)

## Setup and Installation

To set up and run the project locally, follow these steps:

### Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (version 5.x or later)
- [Android Studio](https://developer.android.com/studio) (for Android development) or [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- A physical or virtual device to run the application (Expo Go app is recommended for testing on a physical device)

### Installation

1. **Clone the Repository**  
   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-repo/cryptelligence-test-mobile.git
   ```

2. **Navigate to the Project Directory**
   Navigate into the project directory:

   ```bash
   cd cryptelligence-test-mobile
   ```

3. **Install Dependencies**
   Install the required dependencies using npm or yarn:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## Running the Project

### Starting the Development Server

To start the development server, use the following command:

```bash
npm start
```

or

```bash
yarn start
```

This command will open the Expo development tools in your browser. You can then choose to run the app on an Android emulator, iOS simulator, or a physical device using the Expo Go app.

### Running on Specific Platforms

- **Android:**

  ```bash
  npm run android
  ```

  or

  ```bash
  yarn android
  ```

- **iOS:**

  ```bash
  npm run ios
  ```

  or

  ```bash
  yarn ios
  ```

- **Web:**
  ```bash
  npm run web
  ```
  or
  ```bash
  yarn web
  ```

### Resetting the Project

If you encounter issues and need to reset the project, you can run the following command:

```bash
npm run reset-project
```

or

```bash
yarn reset-project
```

### Running Tests

To run tests, use the following command:

```bash
npm test
```

or

```bash
yarn test
```

## Features and Improvements

### Features

- **MobX State Management:** The project utilizes MobX for state management, allowing for efficient and scalable state handling.
- **Expo Integration:** Leveraging Expo for simplified development and deployment across multiple platforms (iOS, Android, Web).
- **Custom Components:** The project includes custom reusable components such as `AddButton`, `List`, and `Form` for better code organization and reusability.

### Improvements

- **Linear Gradient Background:** A custom linear gradient background is implemented using `expo-linear-gradient`.
- **Dynamic Form Handling:** The `Form` component is dynamically added to the `FlatList` when `formStore.isOpen` is `true`.
- **Responsive UI:** The application is designed to be responsive, handling different screen sizes and orientations effectively.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

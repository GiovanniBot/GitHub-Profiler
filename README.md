# GitHub Profiler

A frontend application built to interact with the GitHub API. It allows users to search for GitHub users, view their details, and display a list of repositories along with their details.

<p align="center">
  <img src="https://github.com/user-attachments/assets/4f2ce568-e313-44ea-a497-d6469c6e6010" alt="Gif demonstrativo.">
</p>

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Automated Testing and Continuous Integration](#automated-testing-and-continuous-integration)
  - [Cypress Tests](#cypress-tests)
  - [Continuous Integration (CI)](#continuous-integration-ci)

## Introduction

This application utilizes React.js to create a user-friendly interface for browsing GitHub users and their repositories. It allows users to search for a specific GitHub user and view their details, including followers, following count, avatar image, and bio. Additionally, users can see a sorted list of repositories, alter the order of the repository list, and access detailed information about each repository.

## Installation

To run this application locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.

## File Structure

The main components and directories in this project include:

- **`src/`**: Contains the source code of the application.
  - **`components/`**: Reusable UI components used throughout the app.
    - **`ui/`**: Shadcn-ui custom reusable components.
  - **`data/types`**: Contains types and interfaces used in the project.
  - **`hooks/`**: Custom React hooks utilized within the application.
  - **`layouts/`**: Layout components defining the structure difference between `home` page and `profile`, `repository` pages.
  - **`Pages/`**: Contains different pages of the application.
  - **`services/`**: Service functions and API-related utilities.
  - **`styles/`**: Global CSS and styling files.
  - **`App.tsx`**: Manages theme provider and sets up routing using React Router.
  - **`main.tsx`**: Entry point that renders the root component of the application.
  - **`Router.tsx`**: Handles application routing logic using React Router.

## Dependencies

This application uses various dependencies and libraries, including but not limited to:

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Provides navigation and routing functionalities for React applications.
- **Vite**: Next-generation frontend tooling. Provides a fast dev server, optimized builds, and more.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Shadcn-ui**: A collection of re-usable components that you can copy and paste into your apps.
- **SWR**: React Hooks library for data fetching.
- **Tailwind CSS**: Utility-first CSS framework used for styling.
- **Numeral**: Library for formatting and manipulating numbers.
- **Lucide React**: SVG icon library for React.
- **react-hot-toast**: Toast notifications for React.
- **tailwind-merge**: Utility for merging Tailwind CSS classes.
- **clsx**: Utility for constructing CSS class strings.

## Automated Testing and Continuous Integration

This project includes end-to-end (E2E) tests using Cypress, a tool for browser-based testing. The Cypress tests validate various functionalities of the application, including header interactions, navigation, user profile details, repository listing, and redirection to GitHub profiles and repositories.

### Cypress Tests

The Cypress tests included in this project cover different scenarios and functionalities of the application. These tests can be found in the `cypress/integration` directory and are structured to ensure the application functions as expected.


To run the Cypress tests locally, follow these steps:

1. Ensure the application and its dependencies are installed.
2. Start the application's development server.
3. Open a new terminal window and run the following command:

   ```bash
   # Run Cypress tests
   npx cypress open
   ```
This command will open the Cypress Test Runner. From there, you can select and execute the available tests, view test results, and debug if necessary.


### Continuous Integration (CI)

The repository is integrated with a CI workflow using GitHub Actions. Upon pushing changes, the CI workflow automatically triggers the execution of Cypress tests to validate the application's functionality.

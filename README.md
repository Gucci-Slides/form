<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>form
</h1>
<h3>◦ Form up your code!</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style&logo=Autoprefixer&logoColor=white" alt="Autoprefixer" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />

<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
</p>
<img src="https://img.shields.io/github/languages/top/Gucci-Slides/form?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/Gucci-Slides/form?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/Gucci-Slides/form?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/Gucci-Slides/form?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📖 Table of Contents

-   [📖 Table of Contents](#-table-of-contents)
-   [📍 Overview](#-overview)
-   [📦 Features](#-features)
-   [📂 Repository Structure](#-repository-structure)
-   [⚙️ Modules](#️-modules)
-   [🚀 Getting Started](#-getting-started)
    -   [🔧 Installation](#-installation)
    -   [🤖 Running form](#-running-form)
    -   [🧪 Tests](#-tests)
-   [🛣 Roadmap](#-roadmap)
-   [🤝 Contributing](#-contributing)
-   [📄 License](#-license)
-   [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

The project is a profile form web application built with Next.js and Tailwind CSS. It allows users to input their profile information such as first name, last name, and email. The form data is validated using the Zod library and can be submitted to a server API. The project provides a robust and accessible form design, with toast notifications for displaying validation errors and server responses. Its value proposition lies in its simplicity, customizability, and ease of use in building and validating forms.

---

## 📦 Features

|     | Feature             | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ⚙️  | **Architecture**    | The codebase follows a modular architecture, with separate files for different functionalities such as form validation, database operations, and API routes. The use of the Next.js framework provides a solid foundation for building scalable and performant web applications.                                                                                                                                               |
| 📄  | **Documentation**   | The codebase includes inline comments and clear folder structure, making it easy to understand the purpose of each file. However, there is room for improvement in terms of overall documentation as it lacks detailed explanations of the business logic and usage instructions. Proper documentation would benefit future contributors and maintainers of the project.                                                       |
| 🔗  | **Dependencies**    | The code relies on external libraries such as Tailwind CSS, Zod, Drizzle ORM, clsx, tailwind-class-combine, and Radix UI. These libraries enhance development capabilities, CSS styling, input validation, database operations, and UI components. All dependencies are managed using npm.                                                                                                                                     |
| 🧩  | **Modularity**      | The codebase is well-organized and divided into smaller reusable components, promoting modularity. The components include form fields, labels, input controls, form item layouts, form description, and error messages, which can be combined to build complex forms easily. This modular approach improves code readability and maintainability.                                                                              |
| 🧪  | **Testing**         | No specific testing strategies or tools are evident in the codebase. Implementing unit tests, integration tests, or end-to-end tests would greatly enhance the quality and reliability of the project.                                                                                                                                                                                                                         |
| ⚡️ | **Performance**     | At a first glance, the codebase does not contain any obvious performance optimizations. However, since it is built on the Next.js framework, it benefits from server-side rendering and static site generation, which can improve performance and load times. Further analysis and benchmark tests are required to assess the overall performance of the system.                                                               |
| 🔐  | **Security**        | Although the codebase does handle certain security concerns like handling database credentials securely, it lacks measures like input validation or protection against attacks like SQL injection or cross-site scripting. Implementing security measures such as validating user input, preventing SQL injection, and using server-side data validation is crucial to protect user data and avoid potential security threats. |
| 🔀  | **Version Control** | The codebase is hosted on GitHub and utilizes Git for version control. Each commit offers a clear and concise message, allowing for easy tracking of code changes over time. The inclusion of a README file provides some basic information about the project setup and initialization.                                                                                                                                        |
| 🔌  | **Integrations**    | The codebase interacts with external systems like Planetscale Serverless and MySQL database using the Drizzle ORM. It also utilizes libraries like Zod for input validation and various CSS libraries such as Tailwind CSS and Radix UI for UI styling. Integrating different systems, databases, and libraries enables functionality like data retrieval, manipulation, form validation, and UI customization.                |
| 📶  | **Scalability**     | The codebase does not compreh                                                                                                                                                                                                                                                                                                                                                                                                  |

---

## 📂 Repository Structure

---

## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                    | Summary                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tailwind.config.js](https://github.com/Gucci-Slides/form/blob/main/tailwind.config.js) | This code defines the configuration for Tailwind CSS. It specifies various colors, sizes, and animations, as well as the file paths where the CSS styles are applied. The configuration enables customization and extension of the framework's default styles. |
| [drizzle.config.ts](https://github.com/Gucci-Slides/form/blob/main/drizzle.config.ts)   | This code provides a configuration object for a database connection and schema generation with the help of the "drizzle-kit" library. It uses the MySQL driver and fetches the database credentials from an environment variable defined in a local.env file.  |
| [next.config.js](https://github.com/Gucci-Slides/form/blob/main/next.config.js)         | The code is a default configuration file for a Next.js project. It exports an empty NextConfig object which can be customized to enhance the functionality and behavior of the Next.js application.                                                            |
| [postcss.config.js](https://github.com/Gucci-Slides/form/blob/main/postcss.config.js)   | The code exports a module with two plugins: tailwindcss and autoprefixer. These plugins enhance web development capabilities by providing utility classes and ensuring compatibility with various web browsers, respectively.                                  |

</details>

<details closed><summary>Drizzle</summary>

| File                                                                                                                | Summary                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [0000_married_joshua_kane.sql](https://github.com/Gucci-Slides/form/blob/main/drizzle/0000_married_joshua_kane.sql) | The code generates a SQL file that defines a table called "formdata" with columns for id, firstName, lastName, and email. The id column is set to auto-increment and is the primary key, while the email column is set to be unique.                      |
| [schema.ts](https://github.com/Gucci-Slides/form/blob/main/drizzle/schema.ts)                                       | The code defines a MySQL table "formdata" with columns: id, firstName, lastName, and email. It sets id as the primary key, defines uniqueness on email, and configures constraints. It leverages the "drizzle-orm" library for MySQL database operations. |

</details>

<details closed><summary>Db</summary>

| File                                                                     | Summary                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [config.ts](https://github.com/Gucci-Slides/form/blob/main/db/config.ts) | The code exports a configuration object with properties for the host, username, and password of a database. The values for these properties are obtained from environment variables using process.env.                                                             |
| [schema.ts](https://github.com/Gucci-Slides/form/blob/main/db/schema.ts) | This code defines a MySQL table "formdata" with columns for id, firstName, lastName, and email. The id column is auto-incrementing and serves as the primary key. The email column must be unique. The code utilizes the "drizzle-orm" package for MySQL handling. |

</details>

<details closed><summary>Lib</summary>

| File                                                                              | Summary                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getAllForm.ts](https://github.com/Gucci-Slides/form/blob/main/lib/getAllForm.ts) | This code retrieves all form data from the database using Planetscale Serverless and Drizzle ORM, then returns the results as an array of formSchemaType objects.                                                                                   |
| [utils.ts](https://github.com/Gucci-Slides/form/blob/main/lib/utils.ts)           | The code is a utility function called "cn" that combines and merges multiple input class values using the "clsx" and "tailwind-merge" libraries. It returns a single class value that can be used to apply styles in a concise and flexible manner. |
| [insertForm.ts](https://github.com/Gucci-Slides/form/blob/main/lib/insertForm.ts) | This code connects to a database using encrypted credentials, inserts a form into the database, and returns the results.                                                                                                                            |

</details>

<details closed><summary>Types</summary>

| File                                                                    | Summary                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [form.ts](https://github.com/Gucci-Slides/form/blob/main/types/form.ts) | The code defines a form schema using the Zod library for input validation. It ensures that the firstName, lastName, and email fields are strings, meet length requirements, and have valid email formats. The formSchemaType type represents the inferred type of the schema. |

</details>

<details closed><summary>App</summary>

| File                                                                          | Summary                                                                                                                                                                                                                                            |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [page.tsx](https://github.com/Gucci-Slides/form/blob/main/app/page.tsx)       | The code is used to render the home page. It imports the ProfileForm component and places it within a flex container, allowing for vertical alignment. The ProfileForm component is responsible for rendering and managing a user's profile data.  |
| [layout.tsx](https://github.com/Gucci-Slides/form/blob/main/app/layout.tsx)   | The code defines a root layout component for a Next.js app. It utilizes global CSS styling, the Inter font from Google Fonts, and a custom Toaster component. It also sets metadata properties for the app's title and description.                |
| [globals.css](https://github.com/Gucci-Slides/form/blob/main/app/globals.css) | This code defines a set of color variables for different elements in a UI, such as backgrounds, borders, and text colors. It also includes a dark theme variation. The tailwind directives are used to apply these colors to specific CSS classes. |

</details>

<details closed><summary>Form</summary>

| File                                                                             | Summary                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [route.ts](https://github.com/Gucci-Slides/form/blob/main/app/api/form/route.ts) | The code provides two functions: GET and POST. The GET function retrieves all form data from the server. The POST function validates and inserts form data into the database. If the data is valid, it is inserted.If the data is invalid, error messages are generated.If the email already exists in the database, a specific error message is returned.All responses are returned in JSON format. |

</details>

<details closed><summary>Components</summary>

| File                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ProfileForm.tsx](https://github.com/Gucci-Slides/form/blob/main/components/ProfileForm.tsx) | This code is responsible for rendering a profile form that allows users to input their first name, last name, and email. The form data is validated using the Zod validation library. Upon submission, the form data is sent to a server API, and the response is handled accordingly. Any validation errors or server errors are displayed to the user using toast notifications. |

</details>

<details closed><summary>Ui</summary>

| File                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [form.tsx](https://github.com/Gucci-Slides/form/blob/main/components/ui/form.tsx)         | This code is a collection of React components and hooks that are designed to work together to build forms easily with form validation. It provides components for form fields, labels, input controls, form item layouts, form description, and form error messages. The use of these components and hooks ensures a consistent and accessible form design.                                                          |
| [input.tsx](https://github.com/Gucci-Slides/form/blob/main/components/ui/input.tsx)       | The code represents a reusable component in React for input fields. It accepts props for input attributes such as className and type, and forwards the ref. The returned JSX renders an input field with specific style classes and attributes based on the props passed. The component can be accessed by importing "Input".                                                                                        |
| [label.tsx](https://github.com/Gucci-Slides/form/blob/main/components/ui/label.tsx)       | This code defines a custom Label component using React and Radix-UI. The Label supports variants and handles peer-disabled behavior. It applies CSS styles provided by class-variance-authority.                                                                                                                                                                                                                     |
| [use-toast.ts](https://github.com/Gucci-Slides/form/blob/main/components/ui/use-toast.ts) | This code implements a toast notification system in a React application. It provides functions to add, update, and dismiss toasts. Toasts have a title, description, action buttons, and can be stacked or limited in number. The code uses a reducer pattern and manages state using hooks.                                                                                                                         |
| [toaster.tsx](https://github.com/Gucci-Slides/form/blob/main/components/ui/toaster.tsx)   | This code defines a Toaster component that displays toast messages. It utilizes a ToastProvider to manage the state of the toasts and a useToast hook to retrieve the toasts. The component then maps over the toasts and renders each toast with a title, description, action, and close button. Finally, a ToastViewport is rendered to control the positioning of the toasts.                                     |
| [toast.tsx](https://github.com/Gucci-Slides/form/blob/main/components/ui/toast.tsx)       | This code consists of a collection of components for creating and displaying toast notifications in a React application. It provides components for rendering the toast container, individual toast messages with various variants, actions within the toast, and a close button. The components use CSS classes to style and animate the toasts.                                                                    |
| [button.tsx](https://github.com/Gucci-Slides/form/blob/main/components/ui/button.tsx)     | The code is a React component called "Button" that supports different variants and sizes. It uses class-variance-authority and Radix UI to handle styling. The Button component can be rendered as either a button or a Slot component based on an "asChild" prop. The buttonVariants object defines different styles for the button variants and sizes. The exported buttonVariants can also be used independently. |

</details>

---

## 🚀 Getting Started

**_Dependencies_**

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Dependency 1`

`- ℹ️ Dependency 2`

`- ℹ️ ...`

### 🔧 Installation

1. Clone the form repository:

```sh
git clone https://github.com/Gucci-Slides/form
```

2. Change to the project directory:

```sh
cd form
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running form

```sh
npm run build && node dist/main.js
```

### 🧪 Tests

```sh
npm test
```

---

## 🛣 Roadmap

> -   [x] `ℹ️  Task 1: Implement X`
> -   [ ] `ℹ️  Task 2: Implement Y`
> -   [ ] `ℹ️ ...`

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).

```sh
git checkout -b new-feature-branch
```

4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.

```sh
git commit -m 'Implemented new feature.'
```

6. Push your changes to your forked repository on GitHub using the following command

```sh
git push origin new-feature-branch
```

7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
   The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  LICENSE-TYPE` License. See the [LICENSE-Type](LICENSE) file for additional info.

---

## 👏 Acknowledgments

`- ℹ️ List any resources, contributors, inspiration, etc.`

---

# AI Code Reviewer (MERN Stack)

This project is an AI-powered code review tool built using the MERN stack. It leverages [**Specify the AI model or API used here, e.g., OpenAI's GPT-4, a custom trained model, etc.**] to analyze code for potential issues and provide feedback. It aims to automate and enhance the code review process, leading to improved code quality and faster development cycles.

## Features

* **Code Analysis:** Analyzes code for bugs, style violations, security vulnerabilities, and performance issues.
* **Detailed Feedback:** Provides clear and actionable feedback with line-by-line annotations.
* **Multiple Language Support:** [**Specify the supported languages, e.g., Python, JavaScript, Java, etc.**]
* **User-Friendly Interface:** Easy-to-use web interface for uploading and viewing code reviews.
* **Review History:** Stores past reviews for easy access and comparison.
* **Customizable Rules (Optional):** Allows users to define custom coding standards and rules.

## Technologies

* **Frontend:** React.js, Material UI (or similar UI library), Axios
* **Backend:** Node.js, Express.js, CORS
* **Database:** MongoDB, Mongoose
* **AI:** [**Specify the AI technology used**]
* **Version Control:** Git

## Installation

1.  **Clone the repository:**

    ```bash
    git clone [repository URL]
    cd AI-Code-Reviewer
    ```

2.  **Backend Setup:**

    ```bash
    cd backend
    npm install
    ```

    * Create a `.env` file in the `backend` directory with the following variables:

        ```
        MONGODB_URI=mongodb://localhost:27017/ai-code-reviewer
        AI_API_KEY=[Your AI API Key] (If Applicable)
        PORT=5000
        ```

    * Start the backend server:

        ```bash
        npm run dev # or npm start
        ```

3.  **Frontend Setup:**

    ```bash
    cd ../frontend
    npm install
    ```

    * Create a `.env.local` file in the `frontend` directory with the following variable:

        ```
        REACT_APP_API_URL=http://localhost:5000
        ```

    * Start the frontend development server:

        ```bash
        npm start
        ```

4.  **MongoDB Setup:**

    * Ensure MongoDB is installed and running on your local machine or a cloud service.
    * Update the `MONGODB_URI` in the `.env` file with your MongoDB connection string.

## Usage

1.  Open the application in your browser at `http://localhost:3000`.
2.  Upload or paste your code into the text area.
3.  Select the programming language.
4.  Click "Analyze" to initiate the code review.
5.  View the AI-generated review results, including line-by-line feedback and summary reports.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

This project is licensed under the [**Specify the License, e.g., MIT License**] - see the `LICENSE` file for details.

## Contact

[Anubhav Shukla] - [shuklaanubhav611@gmail.com]

# Quizfinity

Quizfinity is a decentralized quiz application (dApp) deployed on the Internet Computer Protocol (ICP) blockchain. It offers a unique quizzing experience with full transparency and fairness.

## Features
- **Decentralized**: Quizfinity is built on the ICP blockchain, ensuring full transparency and security.
- **Fairness**: The results are verifiable and cannot be manipulated thanks to the immutable nature of the blockchain.
- **Interactive**: Engage in exciting quizzes and challenge your knowledge.

## Installation
1. Clone the repository:
```
https://github.com/Spydiecy/Quizfinity.git
```

2. Change Directory:
```
cd quizfinity
```

3. Install the dependencies:
```
npm install
```

4. Start the application:
```
npm start
```

## Usage
After starting the application, you will be directed to the main page. You can navigate to the quiz or result page using the provided routes.

## Main Page
The main page welcomes users with a brief introduction to the quiz and its rules. Users can enter their username in the input field and click on "Let's Begin" to start the quiz. The username is stored and used for tracking the user's progress and results.

## Quiz Page
The quiz page displays the questions for the user. Users can select their answers and navigate through the questions using the "Prev" and "Next" buttons. The selected answers are stored and used for calculating the results. Once all questions are answered, the user is automatically redirected to the result page.

## Result Page
The result page displays the user's quiz results. It shows the total points earned, total quiz points, total questions, and the quiz result (passed or failed). Users can also restart the quiz by clicking on the "Restart" button. The result page also includes a result table that provides a detailed breakdown of the user's performance.

## Backend
The backend is written in Motoko and deployed on the Internet Computer. It consists of an actor `UserDatabase` that stores the user data. The user data includes the user's ID and the points they earned. The actor provides two public functions: `saveUser` for saving a user's data, and `read` for retrieving all user data.

## Contributing
We welcome contributions from the community. Please read our contributing guidelines.

## License
This project is licensed under the MIT License.

## Contact
For any queries or suggestions, please open an issue on GitHub.


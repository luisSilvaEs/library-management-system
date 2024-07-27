# README

This Library Management System is a React application designed to handle the visualization, registration, deletion, and update of a book collection. The application allows only authenticated users to perform these operations, but it also provides functionality for registering new users.

## Deploy with Docker compose

1. Download this repository: [Library System React app](https://github.com/luisSilvaEs/library-management-system)
2. Run following command (make sure you have installed Docker in your computer)

```bash
docker-compose up --build
```

3. After the container is up, you can paste in your browser the following link [http://localhost:3000/](http://localhost:3000/)

### Testing the Application

1. Home Screen:
   When you first launch the app, you will be greeted by the Home Screen, which features two buttons: Login and Register.

2. Accessing the Application:
   To access the application and explore its features such as listing books, reading full details, updating, and deleting, follow these instructions:

- Click on the Login button.
- In the login form, use one of the following sets of credentials:
  User 1:
  `Email: user1@example.com`
  `Password: password123`
  User 2:
  `Email: user2@example.com`
  `Password: password456`

3. Search a book by name or by author
   By Name:
   `The lord of the rings`
   By Author:
   `Antoine De Saint`

4. See the detail of the book
   From the list, click on _View Detail_ button next to the title you are interested. You should be redirected to the page where you can read more data about the selected book.

5. Update book
   **This feature only is simulated, no entry is really updated**

- Click on Update
- Type on any register you want to update
- Click on Save
- You should return to the _/books_ page

5. Delete book
   **This feature only is simulated, no entry is really deleted**

- Click on Delete
- A modal will display indicated the entry was deleted.
- Then you should be redirected to the _/book_ page

6. Register user
   **This feature only is simulated, no entry is really added**

- Click on Register
- Fill the form with your data
- Click on _Create account_

## Project Directory Structure

```
src
├── api
├── assets
├── components
│ └── common
│ ├── actionButton
│ ├── form
│ ├── list
│ ├── navigationButton
│ ├── Modal
│ └── Spinner
├── context
├── pages
│ ├── books
│ ├── detail
│ ├── home
│ ├── login
│ └── register
└── utils
```

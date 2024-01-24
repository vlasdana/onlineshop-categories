# Category-Management-Tool

This is a basic MVC (Model-View-Controller) web application built with HTML, CSS, Node.js, and MySQL. The application manages a simple product category database.

## Folder Structure

- **`/public:`** Contains static assets such as HTML files, stylesheets (CSS), and client-side JavaScript files. These assets are served directly to the client for rendering in the browser.

- **`/controllers:`** This directory houses files responsible for handling application logic. Controllers receive input from the user, interact with models, and send an appropriate response to the view. Each controller file typically corresponds to a specific route or a group of related routes.

- **`/models:`** Defines database models, encapsulating the logic for interacting with the database. These models typically represent entities or objects in your application, and they handle tasks such as querying the database, updating records, and performing other data-related operations.

- **`/routes:`** Contains files that define application routes. Routes specify how the application responds to different HTTP requests. Each route file may correspond to a specific area of functionality, grouping related endpoints together.

- **`/config:`** Holds configuration files for various aspects of the application. This includes in our case database configuration (`db.js`) and the server configuration (`config/app.js`).

- **`/views:`** This is a directory to store template files since we're using a template engine called EJS. Templates are used to dynamically generate HTML on the server side.

- `app.js`: Main entry point of the application.

## Development

Before you start coding in this project make sure you follow these steps and the **Usage** section afterwards 🧐

1. `git clone https://git-iit.fh-joanneum.at/msd-webapp/ws23_students/onlineshop-kategorieverwaltung.git`
2. Make sure you are on develop with `git checkout develop`
3. `git checkout -b <your-branch-name>`
4. `Let's Code!`
5. When you are ready to commit your changes:
6. `git add .` (add all files) or `git add <file-name>..` (just specific ones)
7. `git commit -m '<your-descriptive-commit-message>'`
8. `git push --set-upstream origin <your-branch-name>`

## Usage

1. Make sure you have a local MySQL database setup (f.e with XAMPP) with the **credentials** that are visible in the `/config/db.js` file.
2. Run `nvm use` to use the required node version (v16.14.0) (make sure you have nvm installed to quickly install and switch between node versions) Windows Installer: https://github.com/coreybutler/nvm-windows/releases
3. Install dependencies: `npm install`
4. Run the application: `npm start`


## Database

The application uses MySQL for the database. The `/config/db.js` file contains the database credentials. 
In `/config/create-db.sql` you can find sql code that will create the database you need to work with the application.

If you have little or no experience with databases, here is a overview of the steps you need:
- install [XAMPP](https://www.apachefriends.org/de/index.html)
- start apache and mysql servers
- type `localhost/phpmyadmin` in your browser (f.e. Google Chrome, Firefox etc.)
- **IMPORTANT: copy the sql code from the `/config/create-db.sql` file and paste it under SQL in phpmyadmin and don't forget to press OK to execute the SQL-Code**
- now you should have a database called `webshop` hosted on your local database-server 😁


## Routes (TODO: to implement in html and ejs)

- `/category/list`: Backend Endpoint that makes it possible to use the `categories` variable inside ejs to render a list of categories.
- `/category/update/${id}`: Backend Endpoint that makes it possible to edit a category object inside ejs.
- `/category/save`: Backend endpoint that saves a new category to the database. (can be accessed with form action="/category/save")


## XSS and SQL Injection Handling

- The application uses EJS for rendering, which automatically escapes user inputs, helping prevent XSS.
- **(TODO)** SQL queries should use parameterized queries to prevent SQL injection attacks.

## Requirements

This project requires a **minimum version of node v16.14.0 (npm v8.3.1)**, since we're using mysql2 v3.6.5.

- Node: `16.14.0`
- npm: `8.3.1`
- database server on localhost (check out config/db.js)

## Dependencies

- Express: `^4.18.2`
- EJS: `^3.1.9`
- MySQL2: `^3.6.5`
- dotenv: `^16.3.1`

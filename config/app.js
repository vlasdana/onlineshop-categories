import express from 'express'
import categoryRoutes from '../routes/categoryRoutes.js';

const app = express();

// Middleware
// This middleware parses incoming request bodies with the application/x-www-form-urlencoded format.
// It allows you to access form data in req.body in your route handlers.
app.use(express.urlencoded({ extended: true }));

// Serves static files that are inside the public folder.
app.use(express.static('public'));

// Set up EJS (Embedded JavaScript) view engine as template engine
// EJS lets you embed JS code directly into your HTML, which helps with rendering dynamic content on the server side
app.set('view engine', 'ejs');
app.set('views', 'views'); // specify where EJS files are located, in this case inside the views folder

// Routes
// This line tells Express to use the routes defined in categoryRoutes.js for any URL that starts with /category.
// For example, if you have a route in categoryRoutes.js for /list, it would be accessible at /category/list.
app.use('/category', categoryRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Middleware: Internal Server Error');
});

export default app;
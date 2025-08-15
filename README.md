# Express Routing Web Application

A simple Express.js web application with three pages and business hours restriction middleware.

## Features

- **Three Main Pages**: Home, Our Services, and Contact Us
- **Navigation Bar**: Consistent navigation across all pages
- **Business Hours Middleware**: Application only accessible Monday-Friday, 9 AM - 5 PM
- **Responsive Design**: Clean CSS styling with responsive layout
- **EJS Templates**: Server-side rendering with reusable layout

## Project Structure

```
express/
├── app.js                 # Main server file
├── package.json           # Project dependencies
├── public/
│   └── styles.css        # CSS styling
└── views/
    ├── layout.ejs        # Shared layout template
    ├── home.ejs          # Home page
    ├── services.ejs      # Services page
    ├── contact.ejs       # Contact page
    └── closed.ejs        # Outside business hours page
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/John124code/express-routing.git
cd express-routing
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node app.js
```

4. Open your browser and navigate to `http://localhost:3000`

## Dependencies

- **Express.js**: Web framework for Node.js
- **EJS**: Embedded JavaScript templating engine
- **Path**: Node.js path utilities

## Business Hours

The application is only accessible during:
- **Days**: Monday to Friday
- **Hours**: 9:00 AM to 5:00 PM

Outside these hours, visitors will see a "We're Currently Closed" page.

## Routes

- `/` - Home page
- `/services` - Our Services page
- `/contact` - Contact Us page

All routes are protected by the business hours middleware.

## Middleware

### Working Hours Middleware
Located in `app.js`, this custom middleware:
- Checks the current day and time
- Allows access only during business hours (Monday-Friday, 9 AM-5 PM)
- Redirects to a "closed" page outside business hours

## Styling

The application uses custom CSS located in `public/styles.css` featuring:
- Modern, clean design
- Responsive navigation bar
- Card-based layouts
- Professional color scheme
- Mobile-friendly responsive design

## Templates

The application uses EJS templating with:
- **Shared Layout**: Common header, navigation, and footer
- **Dynamic Content**: Page-specific content rendered within the layout
- **Active Navigation**: Current page highlighting in the navigation bar

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created as part of an Express.js routing checkpoint exercise.

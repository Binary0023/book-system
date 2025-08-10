# MERN CRUD Application

A full-stack web application built with MongoDB, Express.js, React, and Node.js that implements complete CRUD functionality for managing a book collection.

## Features

- **Create**: Add new books with validation
- **Read**: View all books and individual book details
- **Update**: Edit existing book information
- **Delete**: Remove books from the collection
- **Responsive Design**: Built with Tailwind CSS
- **Client-side Routing**: React Router DOM for SPA navigation
- **Form Validation**: Both client-side and server-side validation
- **Error Handling**: Comprehensive error handling and user feedback

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Axios for API calls
- Tailwind CSS for styling
- Vite for build tooling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS middleware
- Environment variables with dotenv

## Project Structure

```
mern-crud-app/
├── backend/
│   ├── models/
│   │   └── itemModel.js
│   ├── controllers/
│   │   └── itemController.js
│   ├── routes/
│   │   └── itemRoutes.js
│   ├── index.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── layouts/
    │   │   │   ├── Navbar.jsx
    │   │   │   └── Footer.jsx
    │   │   └── views/
    │   │       ├── HomeView.jsx
    │   │       ├── ItemListView.jsx
    │   │       ├── ItemFormView.jsx
    │   │       └── ItemDetailsView.jsx
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   ├── ViewItemsPage.jsx
    │   │   ├── AddItemPage.jsx
    │   │   ├── EditItemPage.jsx
    │   │   └── ItemDetailsPage.jsx
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── index.html
```

## API Routes

- `GET /api/items` - Get all books
- `GET /api/items/:id` - Get single book by ID
- `POST /api/items` - Create new book
- `PUT /api/items/:id` - Update book by ID
- `DELETE /api/items/:id` - Delete book by ID

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy `.env` file and update MongoDB connection string
   - For local MongoDB: `mongodb://localhost:27017/mern-crud`
   - For MongoDB Atlas: Use your cluster connection string

4. Start the backend server:
   ```bash
   npm run dev
   ```
   The server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run on http://localhost:3000

### Database Setup

#### Option 1: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. The application will create the database automatically

#### Option 2: MongoDB Atlas
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get the connection string
4. Update the `MONGODB_URI` in backend/.env

## Usage

1. **Home Page**: Welcome page with navigation links
2. **View Items**: `/items` - Display all books in a grid layout
3. **Add Item**: `/add-item` - Form to add a new book
4. **Edit Item**: `/edit-item/:id` - Form to edit existing book
5. **Item Details**: `/items/:id` - Detailed view of a single book

## Book Schema

Each book contains:
- **Title**: String (required, max 100 characters)
- **Author**: String (required, max 50 characters)
- **Description**: String (required, max 500 characters)
- **Price**: Number (required, minimum 0)
- **Category**: Enum (Fiction, Non-Fiction, Science, Technology, Biography, History, Other)
- **Published Date**: Date (required)
- **In Stock**: Boolean (default: true)
- **Timestamps**: Created and updated dates

## Development Commands

### Backend
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for educational purposes as part of Assignment 02.

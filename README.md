# Movie App

This is a React-based movie app that allows users to create an account, log in, view, search, and manage movies.
My live url[https://euphonious-croissant-a7c8db.netlify.app/]
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Components](#components)
- [Pages](#pages)
- [Styling](#styling)
- [Environment Variables](#environment-variables)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/movie-app-frontend.git
   cd movie-app-frontend
## Install dependencies:
npm install


## Start the development server:
npm start

## Usage
Running the App;
npm run dev

## Project Structure
src/components/: Contains reusable components like Footer, Review, and ReviewEditForm.
src/pages/: Contains main pages like MovieDetails, MovieEditForm, MovieNewForm, Movies, Profile, and Search.
src/App.js: The main application component that includes routing.
src/index.js: The entry point for the React application.
## Available Scripts
npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm run preview: Serves the production build locally.
## Components and Pages
 1.Footer
A footer component that includes navigation links for the user's movies, search, and profile pages.

 2.MovieDetails
Displays detailed information about a specific movie, including title, description, release date, genre, rating, duration, and favorite status. Allows users to edit or delete the movie.

 3.MovieEditForm
Allows users to edit the details of a movie. Fetches the movie data and updates it via a PUT request.

 4.MovieNewForm
Allows users to add a new movie to their list. Sends a POST request to create the movie.

 5.Movies
Displays a list of the user's movies with options to sort by favorites or name. Allows navigation to movie details and adding new movies.

 6.Profile
Displays the user's profile information, including username, email, and profile picture. Includes options for settings and logging out.

 7.Review
Displays a review for a movie with an option to edit the review.

 8.ReviewEditForm
Allows users to edit an existing review for a movie. Sends a PUT request to update the review.

 9.Search
Provides a search functionality for movies by title. Displays search results with links to movie details.

 ## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License
This project is licensed under the MIT License.


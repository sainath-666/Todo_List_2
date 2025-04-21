# Simple Todo List Web App

This is a simple Todo List web application built with HTML, Bootstrap, JavaScript (frontend), and Node.js (backend). Tasks are stored in a plain text file (`tasks.txt`).

## Features
- Add new tasks with name, description, and deadline
- Edit existing tasks
- All tasks are saved in a text file on the server

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed

### Setup
1. Clone or download this repository to your computer.
2. Open a terminal in the project folder.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the backend server:
   ```
   node server.js
   ```
5. Open `index.html` in your web browser.

## File Structure
- `index.html` - Main web interface
- `main.js` - Frontend logic (form handling, API calls)
- `server.js` - Node.js backend (Express API)
- `tasks.txt` - Text file database for tasks
- `package.json` - Node.js dependencies

## API Endpoints
- `POST /add-task` - Add a new task
- `GET /tasks` - Get all tasks
- `POST /edit-task` - Edit an existing task by index

## Notes
- The app must be run locally; it does not work as a public website without a backend server.
- The backend server must be running for the app to function.


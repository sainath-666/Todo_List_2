# Todo List Web Application

A lightweight, easy-to-use Todo List application built with modern web technologies. This application provides a simple interface for managing daily tasks with features for adding, editing, and tracking task deadlines.

## 🚀 Features

- ✨ Clean and intuitive user interface
- ➕ Add new tasks with detailed information:
  - Task name
  - Task description
  - Deadline
- ✏️ Edit existing tasks
- 💾 Persistent storage using text file
- 🔄 Real-time updates

## 🛠️ Technologies Used

- Frontend:
  - HTML5
  - CSS (Bootstrap framework)
  - JavaScript
- Backend:
  - Node.js
  - Express.js
- Storage:
  - Local text file system (`tasks.txt`)

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12.0.0 or higher)
- A modern web browser

## 🚀 Getting Started

1. **Clone the Repository**

   ```bash
   git clone [repository-url]
   cd Todo_List_2
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Server**

   ```bash
   node server.js
   ```

4. **Access the Application**
   - Open `index.html` in your web browser
   - The application will be running on your local machine

## 📁 Project Structure

```
Todo_List_2/
├── index.html    # Main web interface
├── main.js       # Frontend JavaScript
├── server.js     # Express backend server
├── tasks.txt     # Task storage file
└── package.json  # Project dependencies
```

## 🔗 API Documentation

The application exposes the following RESTful endpoints:

| Endpoint     | Method | Description             |
| ------------ | ------ | ----------------------- |
| `/tasks`     | GET    | Retrieve all tasks      |
| `/add-task`  | POST   | Create a new task       |
| `/edit-task` | POST   | Update an existing task |

## 📝 Notes

- This is a local-only application and requires the backend server to be running
- All tasks are stored locally in `tasks.txt`
- The application uses simple text file storage for demonstration purposes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

<div align="center">
  <h2>Made with ❤️ by Sainathreddy</h2>
  </div>

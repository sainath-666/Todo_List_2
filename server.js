const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
const TASK_FILE = 'tasks.txt';

app.use(cors());
app.use(bodyParser.json());

// Add a new task
app.post('/add-task', (req, res) => {
  const task = req.body;
  fs.appendFile(TASK_FILE, JSON.stringify(task) + '\n', err => {
    if (err) return res.status(500).send('Error saving task');
    res.status(200).send('Task added');
  });
});

// Edit an existing task
app.post('/edit-task', (req, res) => {
  const { idx, name, description, deadline } = req.body;
  if (!fs.existsSync(TASK_FILE)) return res.status(404).send('No tasks found');
  let lines = fs.readFileSync(TASK_FILE, 'utf-8').trim().split('\n');
  if (idx < 0 || idx >= lines.length) return res.status(400).send('Invalid index');
  lines[idx] = JSON.stringify({ name, description, deadline });
  fs.writeFileSync(TASK_FILE, lines.join('\n') + '\n');
  res.status(200).send('Task updated');
});

// Get all tasks
app.get('/tasks', (req, res) => {
  if (!fs.existsSync(TASK_FILE)) return res.json([]);
  const lines = fs.readFileSync(TASK_FILE, 'utf-8').trim().split('\n');
  const tasks = lines.filter(line => line).map(line => JSON.parse(line));
  res.json(tasks);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

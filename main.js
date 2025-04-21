const apiBase = 'http://localhost:3000';
let currentTasks = [];

async function fetchTasks() {
  const res = await fetch(`${apiBase}/tasks`);
  const tasks = await res.json();
  currentTasks = tasks;
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  if (tasks.length === 0) {
    taskList.innerHTML = '<li class="list-group-item text-center text-muted">No tasks yet. Add your first task!</li>';
    return;
  }
  tasks.forEach((task, idx) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn';
    li.innerHTML = `<div><b style="color:#f7971e">${task.name}</b><br><span style="font-size:0.97em;color:#555;">${task.description}</span> <span class="badge bg-secondary ms-2">${task.deadline}</span></div>
      <button class="btn btn-sm edit-btn" data-idx="${idx}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706l-1 1a.5.5 0 0 1-.708 0L13 2.707l1-1a.5.5 0 0 1 .707 0l.795.793zm-1.75 2.456-1-1L4 12.146V13h.854l8.898-8.604z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg></button>`;
    taskList.appendChild(li);
  });
  // Add event listeners for edit buttons
  document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = this.getAttribute('data-idx');
      openEditModal(idx);
    });
  });
}

// Animate form on submit
const todoForm = document.getElementById('todoForm');
todoForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  const name = document.getElementById('taskName').value;
  const description = document.getElementById('taskDesc').value;
  const deadline = document.getElementById('taskDeadline').value;
  await fetch(`${apiBase}/add-task`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, description, deadline })
  });
  this.reset();
  fetchTasks();
  todoForm.classList.add('animate__animated', 'animate__pulse');
  setTimeout(() => todoForm.classList.remove('animate__animated', 'animate__pulse'), 800);
});

function openEditModal(idx) {
  const task = currentTasks[idx];
  document.getElementById('editTaskName').value = task.name;
  document.getElementById('editTaskDesc').value = task.description;
  document.getElementById('editTaskDeadline').value = task.deadline;
  document.getElementById('editTaskIndex').value = idx;
  const modal = new bootstrap.Modal(document.getElementById('editModal'));
  modal.show();
}

document.getElementById('editForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const idx = document.getElementById('editTaskIndex').value;
  const name = document.getElementById('editTaskName').value;
  const description = document.getElementById('editTaskDesc').value;
  const deadline = document.getElementById('editTaskDeadline').value;
  await fetch(`${apiBase}/edit-task`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idx: Number(idx), name, description, deadline })
  });
  const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
  editModal.hide();
  fetchTasks();
});

window.onload = fetchTasks;

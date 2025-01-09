document.getElementById('add-task-button').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
  
    if (taskText) {
      const taskList = document.getElementById('task-list');
  
      // Create a new task item
      const taskItem = document.createElement('li');
      taskItem.className = 'task-item';
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <div class="task-buttons">
          <button class="complete-btn">Complete</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;
  
      // Add event listeners for buttons
      taskItem.querySelector('.complete-btn').addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
  
      taskItem.querySelector('.delete-btn').addEventListener('click', () => {
        taskList.removeChild(taskItem);
      });
  
      taskList.appendChild(taskItem);
      taskInput.value = ''; // Clear input field
    } else {
      alert('Please enter a task!');
    }
  });
  
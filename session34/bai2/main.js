let courses = JSON.parse(localStorage.getItem("tasks")) || [
    {
      id: 1,
      content: 'Learn Javascript Session 01',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Anh Bách',
    },
    {
      id: 2,
      content: 'Learn Javascript Session 2',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Lâm th',
    },
    {
      id: 3,
      content: 'Learn CSS Session 1',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Hiếu Cí ớt ớt',
    }
  ];
  
  let editingId = null;
  
  function renderTable() {
    const tbody = document.getElementById("taskTable");
    tbody.innerHTML = "";
    courses.forEach((task, index) => {
      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${task.content}</td>
          <td>${task.dueDate}</td>
          <td>${task.status}</td>
          <td>${task.assignedTo}</td>
          <td>
            <button class="btn btn-warning btn-sm me-1" onclick="editTask(${task.id})">Sửa</button>
            <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Xoá</button>
          </td>
        </tr>
      `;
      tbody.innerHTML += row;
    });
    localStorage.setItem("tasks", JSON.stringify(courses));
  }
  
  function submitTask() {
    const content = document.getElementById("content").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;
    const assignedTo = document.getElementById("assignedTo").value.trim();
  
    if (editingId) {
      const task = courses.find(t => t.id === editingId);
      task.content = content;
      task.dueDate = dueDate;
      task.status = status;
      task.assignedTo = assignedTo;
      editingId = null;
    } else {
      const newTask = {
        id: Date.now(),
        content,
        dueDate,
        status,
        assignedTo
      };
      courses.push(newTask);
    }
  
    document.getElementById("content").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("status").value = "Pending";
    document.getElementById("assignedTo").value = "";
  
    renderTable();
  }
  
  function editTask(id) {
    const task = courses.find(t => t.id === id);
    document.getElementById("content").value = task.content;
    document.getElementById("dueDate").value = task.dueDate;
    document.getElementById("status").value = task.status;
    document.getElementById("assignedTo").value = task.assignedTo;
    editingId = id;
  }
  
  function deleteTask(id) {
    if (confirm("Bạn có chắc muốn xoá công việc này không?")) {
      courses = courses.filter(task => task.id !== id);
      renderTable();
    }
  }
  
  renderTable();
  
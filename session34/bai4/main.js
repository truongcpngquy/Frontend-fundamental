let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const div = document.createElement("div");
    div.className = "todo-item";
    div.innerHTML = `
      <span>${todo}</span>
      <button class="btn btn-danger btn-sm" onclick="deleteTodo(${index})">Xoá</button>
    `;
    list.appendChild(div);
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
  const input = document.getElementById("todoInput");
  const value = input.value.trim();
  if (value) {
    todos.push(value);
    input.value = "";
    renderTodos();
  } else {
    alert("Vui lòng nhập công việc!");
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

renderTodos();

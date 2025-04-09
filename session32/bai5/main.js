function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (task === "") {
      alert("Vui lòng nhập nhiệm vụ!");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }

  function deleteTask(button) {
    const confirmed = confirm("Bạn có chắc muốn xoá nhiệm vụ này không?");
    if (confirmed) {
      const li = button.parentElement;
      li.remove();
    }
  }
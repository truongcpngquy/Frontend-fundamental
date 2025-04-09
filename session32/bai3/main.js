function addSubject() {
    const input = document.getElementById('subjectInput');
    const subjectName = input.value.trim();

    if (subjectName === '') {
      alert("tên môn học không được để trống!");
      return;
    }

    const list = document.getElementById('subjectList');
    const newItem = document.createElement('li');
    newItem.textContent = subjectName;
    list.appendChild(newItem);

    input.value = '';
    input.focus();
  }
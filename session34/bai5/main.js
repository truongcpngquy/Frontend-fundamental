let employees = JSON.parse(localStorage.getItem('employees')) || [
    { name: 'Nguyễn Văn A', position: 'Developer' },
    { name: 'Trần Thị B', position: 'Designer' },
    { name: 'Phạm Văn C', position: 'Project Manager' }
  ];
  
  function renderEmployees() {
    const table = document.getElementById('employeeTable');
    table.innerHTML = '';
    employees.forEach((emp, index) => {
      table.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${emp.name}</td>
          <td>${emp.position}</td>
        </tr>
      `;
    });
    localStorage.setItem('employees', JSON.stringify(employees));
  }
  
  function addEmployee() {
    const name = document.getElementById('name').value.trim();
    const position = document.getElementById('position').value.trim();
    if (name === '' || position === '') {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    employees.push({ name, position });
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
    renderEmployees();
  }
  
  renderEmployees();
  
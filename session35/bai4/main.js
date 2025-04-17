  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  let currentPage = 1;
  const perPage = 3;

  function addEmployee() {

    const form = document.getElementById("employee-form");
    const name = document.getElementById("employee-name").value.trim();
    const position = document.getElementById("employee-position").value.trim();

    if (name === "" || position === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const employee = {
      id: employees.length + 1,
      name,
      position
    };

    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    form.reset();

    goToPage(Math.ceil(employees.length / perPage)); // về trang cuối
  }

  function renderEmployees() {
    const tableBody = document.getElementById("tbody");
    tableBody.innerHTML = "";

    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const pageEmployees = employees.slice(start, end);

    pageEmployees.forEach((ep, index) => {
      const row = `
        <tr>
          <td>${start + index + 1}</td>
          <td>${ep.name}</td>
          <td>${ep.position}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });

    renderPagination();
  }

  function renderPagination() {
    const totalPages = Math.ceil(employees.length / perPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    // Previous
    const prev = document.createElement("li");
    prev.className = `page-item ${currentPage === 1 ? "disabled" : ""}`;
    prev.innerHTML = `<a class="page-link" href="#">Previous</a>`;
    prev.onclick = () => {
      if (currentPage > 1) {
        goToPage(currentPage - 1);
      }
    };
    pagination.appendChild(prev);

    // Numbered pages
    for (let i = 1; i <= totalPages; i++) {
      const page = document.createElement("li");
      page.className = `page-item ${i === currentPage ? "active" : ""}`;
      page.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      page.onclick = () => goToPage(i);
      pagination.appendChild(page);
    }

    // Next
    const next = document.createElement("li");
    next.className = `page-item ${currentPage === totalPages ? "disabled" : ""}`;
    next.innerHTML = `<a class="page-link" href="#">Next</a>`;
    next.onclick = () => {
      if (currentPage < totalPages) {
        goToPage(currentPage + 1);
      }
    };
    pagination.appendChild(next);
  }

  function goToPage(page) {
    currentPage = page;
    renderEmployees();
  }

  renderEmployees();

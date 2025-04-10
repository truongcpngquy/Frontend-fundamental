let dish = [
    { name: "Rau sạch", category: "Đồ ăn" },
    { name: "Thịt lợn", category: "Đồ ăn" },
    { name: "Pepsi không calo", category: "Nước" },
    { name: "Cocacola", category: "Nước" },
    { name: "Cờ lê", category: "Dụng cụ" },
    { name: "Tuy vít", category: "Dụng cụ" }
];

function FilterByCategory(category) {
    if (category === "Danh mục") return dish;
    return dish.filter(item => item.category === category);
}

function ShowList() {
    let select = document.getElementById("mySelect");
    let ul = document.getElementById("ul");

    let selectedCategory = select.options[select.selectedIndex].text;
    let filteredList = FilterByCategory(selectedCategory);

    ul.innerHTML = "";
    filteredList.forEach((item) => {
        ul.innerHTML += `
            <li><p>Tên: ${item.name} – Danh mục: ${item.category}</p></li>
        `;
    });
}

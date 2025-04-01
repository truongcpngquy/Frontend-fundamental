function formatDates(input) {
    if (!Array.isArray(input)) {
        return "Dữ liệu không hợp lệ"; 
    }

    if (input.length === 0) {
        return "Mảng không có phần tử nào"; 
    }

    return input.map(item => {
        let date = new Date(item);
        if (isNaN(date)) {
            return "Dữ liệu không hợp lệ";
        }
        return date.toLocaleDateString("vi-VN", { day: '2-digit', month: '2-digit', year: 'numeric' });
    });
}

let input = ["2025-03-10", "2024-12-25", "2023-07-01"];
console.log(formatDates(input));


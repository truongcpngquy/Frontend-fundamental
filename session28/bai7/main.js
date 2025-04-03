let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
];
function avg(student) {
    let sum = (student.scores.math + student.scores.english + student.scores.literature)/3
    return sum 
}
function displayStudentList(students) {
    for (let i = 0; i < students.length; i++) {
        if (avg(students[i]) >= 8) {
            console.log(`${students[i].name} - math: ${students[i].scores.math}, english: ${students[i].scores.english}, literature: ${students[i].scores.literature}`);
        }
    }
}
displayStudentList(students)
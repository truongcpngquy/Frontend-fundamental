let textElement = document.getElementById("text");

function changeSize(amount) {
    let currentSize = parseInt(window.getComputedStyle(textElement).fontSize);
    let newSize = currentSize + amount;

    if (newSize >= 10) {
        textElement.style.fontSize = newSize + "px";
    }
}

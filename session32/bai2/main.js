let count = 0
function countClicks(){
    count++
    document.getElementById('count').textContent = 'Số lần bấm: '+count;
}
function resetCount(){
    count = 0
    document.getElementById('count').textContent = 'Số lần bấm: '+count;
}
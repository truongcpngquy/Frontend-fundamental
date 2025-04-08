const toggleButton = document.querySelector('button'); 
const body = document.body; 

toggleButton.addEventListener('click', () => {
    
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white'; 
        body.style.color = 'black'; 
    } else {
        body.style.backgroundColor = 'black'; 
        body.style.color = 'white'; 
    }
});
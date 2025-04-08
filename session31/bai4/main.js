const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block'; 
    modalOverlay.style.display = 'block'; 
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none'; l
    modalOverlay.style.display = 'none'; 
});

modalOverlay.addEventListener('click', () => {
    modal.style.display = 'none'; l
    modalOverlay.style.display = 'none'; 
});
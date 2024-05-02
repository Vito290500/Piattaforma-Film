const addbtn = document.getElementById('add-btn');
const modal = document.getElementById('modal-section');
const background = document.getElementById('background-surround');
const clearbtn = document.getElementById('clear-btn');
const input = document.querySelectorAll("input");
const textarea = document.querySelector("textarea")

addbtn.addEventListener('click', () => {
    modal.style.display = 'block';
    background.style.display = 'block';
})

background.addEventListener('click', () =>{
    modal.style.display = 'none';
    background.style.display = 'none';
})

clearbtn.addEventListener('click', () => {
    input.forEach(element => {
        element.value = '';
    });
    textarea.value = '';
});
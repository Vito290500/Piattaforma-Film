const addbtn = document.getElementById('add-btn');
const modal = document.getElementById('modal-section');
const background = document.getElementById('background-surround');
const clearbtn = document.getElementById('clear-btn');
const input = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");
const SearchInput = document.getElementById('searchBar');
const clearInputSearch = document.getElementById('ClearInputSearchBtn');
const modalError = document.getElementById('modal-error');

addbtn.addEventListener('click', () => {
    modal.style.display = 'block';
    background.style.display = 'block';
})

background.addEventListener('click', () =>{
    modalError.style.display = 'none';
    modal.style.display = 'none';
    background.style.display = 'none';
})

clearbtn.addEventListener('click', () => {
    input.forEach(element => {
        element.value = '';
    });
    textarea.value = '';
});

SearchInput.addEventListener('click', () =>{
    clearInputSearch.style.display = 'block'
})

clearInputSearch.addEventListener('click', () => {
    clearInputSearch.style.display = 'none';
});



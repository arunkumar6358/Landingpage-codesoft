const menu = document.querySelector('.menubar a');
const menulist = document.querySelector('nav ul');

menu.addEventListener('click', () => {
    menulist.classList.toggle('showmenu');
    menu.innerHTML = menu.innerHTML === '☰' ? '&#x2613;' : '☰';
});




// const menu = document.querySelector('.menubar a'); // value get using class name and tage name
// const menulist = document.querySelector('nav ul'); // value get using tag name
// menu.addEventListener('click', ()=>{
//     menulist.classList.toggle('showmenu');
// });
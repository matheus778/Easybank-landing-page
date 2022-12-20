let btnHamburger = document.querySelector('.btnHamburger');
let btnIcon = document.querySelector('.btnHamburger img');
let links = document.querySelectorAll('.navbar__menu li a');

let menu = document.querySelector('.navbar__menu');

function toggleMenu() {
  menu.classList.toggle('show');
  if(menu.classList.contains('show')){
    btnIcon.setAttribute('src','./images/icon-close.svg')
  }
  else {
    btnIcon.setAttribute('src', './images/icon-hamburger.svg')
  }
}


for (let link of links) {
  link.addEventListener('click', ()=> {
    menu.classList.remove('show');
    btnIcon.setAttribute('src', './images/icon-hamburger.svg')
  });
}

btnHamburger.addEventListener('click', toggleMenu)


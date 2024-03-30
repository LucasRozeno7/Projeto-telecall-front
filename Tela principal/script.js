let filter_btn = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove('active');
    }
    let select_tab = filter_btn[i].getAttribute('data-tab');
    filter_btn[i].classList.add('active');
    for (let t = 0; t < tab_items.length; t++) {
      document.querySelector('.tab-filter-item-container').style.height =
        tab_items[t].scrollHeight + 'px';
      if (tab_items[t].classList.contains(select_tab)) {
        tab_items[t].classList.add('select_tab');
      } else {
        tab_items[t].classList.remove('select_tab');
      }
    }
  });
}

for (let th = 0; th < tab_items.length; th++) {
  document.querySelector('.tab-filter-item-container').style.height =
    tab_items[th].scrollHeight + 'px';
}
 /*card*/

 /*Navbar */
 class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

/*dark mode*/
let toggle = document.getElementById("mode");

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

/* logado */
let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = ' Olá, ' + userLogado.login

function sair(){
  localStorage.clear()
  location.reload()
}

var libtn = document.getElementById('libtn')
var libtn2 = document.getElementById('libtn2')
var libtn3 = document.getElementById('libtn3')

if(logado){
  libtn.style.display = "none"
  libtn2.style.display = "none"
  libtn3.classList.remove('errorH')
}



/*Aumentar e diminuir fonte*/
function letraGrande() {
  document.getElementById("font1").style.fontSize = "30px";
  document.getElementById("font2").style.fontSize = "30px";
  document.getElementById("font3").style.fontSize = "30px";
  document.getElementById("font4").style.fontSize = "30px";
  document.getElementById("font5").style.fontSize = "30px";
  document.getElementById("font6").style.fontSize = "30px";
  document.getElementById("font7").style.fontSize = "30px";
  document.getElementById("font8").style.fontSize = "30px";
  document.getElementById("font9").style.fontSize = "20px";
}

function letraNormal() {
  document.getElementById("font1").style.fontSize = "20px";
  document.getElementById("font2").style.fontSize = "20px";
  document.getElementById("font3").style.fontSize = "20px";
  document.getElementById("font4").style.fontSize = "20px";
  document.getElementById("font5").style.fontSize = "20px";
  document.getElementById("font6").style.fontSize = "20px";
  document.getElementById("font7").style.fontSize = "20px";
  document.getElementById("font8").style.fontSize = "20px";
  document.getElementById("font9").style.fontSize = "16px";
}
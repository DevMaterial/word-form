const nav = [...document.querySelectorAll('nav')];
const slideTitle = [...document.querySelectorAll('h2')];
const arrow = [...document.querySelectorAll('img[name="toggler"]')];

console.log(arrow);

const navIcon = document.getElementById('burger-nav');
const cancelIcon = document.getElementById('cancel');
const navigation = document.getElementById('navigation');

navIcon.addEventListener('click', () => {
  navigation.style.visibility = 'visible';
  navigation.style.opacity = '1';
})

cancelIcon.addEventListener('click', () => {
  navigation.style.visibility = 'hidden';
  navigation.style.opacity = '0';
})

nav.forEach((entry) => {
  entry.style.maxHeight = '0px';
})

const tabletQuery = window.matchMedia("(max-width: 992px)");
const mobileQuery = window.matchMedia("(max-width: 400px)");
var aHeight;

if (mobileQuery.matches) {
  nav[0].style.maxHeight = '1500px';
  aHeight = '1500px';
} else {
  nav[0].style.maxHeight = '500px';
  aHeight = '500px';
}

function accordian() {
  slideTitle.forEach((entry) => {
    const index = entry.getAttribute('name');
    const navStyle = nav[index].style;
    entry.addEventListener('click', () => {
      const toggle = navStyle.maxHeight === '0px' ? aHeight : '0px';
      navStyle.maxHeight = toggle;
    })
  })
}

aHeight ? accordian() : false;

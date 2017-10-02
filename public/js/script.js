const nav = [...document.querySelectorAll('nav')];
const slideTitle = [...document.querySelectorAll('h2')];

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

nav[0].style.maxHeight = '500px';

slideTitle.forEach((entry) => {
  const index = entry.getAttribute('name');
  const navStyle = nav[index].style;
  entry.addEventListener('click', () => {
    const toggle = navStyle.maxHeight === '0px' ? '500px' : '0px';
    navStyle.maxHeight = toggle;
  })
})

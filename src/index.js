import Navbar from './pages/navbar';
import Home from './pages/home';
import Menu from './pages/menu';
import Contact from './pages/contact';
import Food from './food.jpg';

const content = document.getElementById('content');

const showPage = (section) => {
  content.innerHTML = '';
  content.appendChild(Navbar);
  content.appendChild(section);
};

showPage(Home);

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');

homeBtn.addEventListener('click', () => showPage(Home));
menuBtn.addEventListener('click', () => showPage(Menu));
contactBtn.addEventListener('click', () => showPage(Contact));

// Cover Banner

const myImage = new Image();
myImage.src = Food;
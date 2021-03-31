const Navbar = () => {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    navbar.id = 'navbar';
  
    const links = document.createElement('ul');
    links.className = 'nav-link';
    navbar.appendChild(links);
  
    const navHome = document.createElement('li');
    const home = document.createElement('a');
    home.innerHTML = 'Home';
    home.className = 'nav-items';
    home.id = 'home';
    navHome.appendChild(home);
    links.appendChild(navHome);
  
    const navMenu = document.createElement('li');
    const menu = document.createElement('a');
    menu.innerHTML = 'Menu';
    menu.className = 'nav-items';
    menu.id = 'menu';
    navMenu.appendChild(menu);
    links.appendChild(navMenu);
  
    const navContact = document.createElement('li');
    const contact = document.createElement('a');
    contact.innerHTML = 'Contact';
    contact.className = 'nav-items';
    contact.id = 'contact';
    navContact.appendChild(contact);
    links.appendChild(navContact);
  
    return navbar;
  };
  export default Navbar();
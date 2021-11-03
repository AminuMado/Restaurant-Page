import './style.css'
import gitIcon from '../src/RestaurantImages/github-logo.svg'
import home from './home'
import menu from './menu'
import contact from './contact'

const render = (() => {

    function renderHeader() {
      const header = document.createElement('div');
      const title = document.createElement('h1');
      header.setAttribute('id','header');
      title.textContent = 'The Rumbling';
    //   Appends
      document.body.appendChild(header);
      header.appendChild(title);
    };
    function renderNav(){
        const nav = document.createElement('nav');
        nav.setAttribute('id','nav');
        document.body.appendChild(nav);
        const navItems = ['Home','Menu','Contact'];
        // Menu items
        for (let i = 0; i < navItems.length; i += 1) {
          const navItem = document.createElement('a');
          navItem.id = navItems[i];
          navItem.classList.add('nav-link');
          navItem.setAttribute('href', '#');
          navItem.textContent = navItems[i];
          nav.appendChild(navItem);
        }
    };

    function renderContent(){
        const section = document.createElement('section');
        section.setAttribute('id','content');
        document.body.appendChild(section)
    };
    function renderFooter(){
        const footer = document.createElement('footer');
        const p = document.createElement('p');
        const link = document.createElement('a');
        const logo = document.createElement('img');
        p.textContent = 'Copyright © 2021 AminuMado';
        link.setAttribute('href','https://github.com/AminuMado');
        link.setAttribute('target','blank');
        logo.setAttribute('src',gitIcon);
        footer.classList.add('footer');
        logo.classList.add('github-logo');
        // Appends
        link.appendChild(logo);
        footer.appendChild(p);
        footer.appendChild(link);
        document.body.appendChild(footer);
    };
    function buttonsHandler() {
        const menuItems = document.querySelectorAll('#nav a');
        const menuItemHome = menuItems[0];
        const menuItemMenu = menuItems[1];
        const menuItemContacts = menuItems[2];
    
        function removeCurrentClass() {
          menuItems.forEach((element) => {
            element.classList.remove('current');
          });
        }
    
        document.addEventListener('click', (event) => {
          if (event.target.id === 'Home'){
            removeCurrentClass();
            content.textContent = '';
            home.render();
            menuItemHome.classList.add('current');
          } else if (event.target.id === 'Menu'){
            removeCurrentClass();
            content.textContent = '';
            menu.render();
            menuItemMenu.classList.add('current');
          } else if (event.target.id === 'Contact'){
            removeCurrentClass();
            content.textContent = '';
            contact.render();
            menuItemContacts.classList.add('current');
          }else return;
    });
}
    function start(){
        renderHeader();
        renderNav();
        renderContent();
        renderFooter();
        buttonsHandler();
        home.render();
    };
    return {start}
  })();
  render.start();
  
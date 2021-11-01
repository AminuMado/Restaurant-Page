/* import './style.css'
import pastaImage from '../src/RestaurantImages/pasta-1.png';

function render(){

    const element = document.createElement('div');
    const pasta = new Image();
    pasta.src = pastaImage;
    element.appendChild(pasta);
    document.body.appendChild(element);
    console.log('render was called');
}
render()
 */
import './style.css';
import './home-style.css';
import './menu.css';
import gitLogo from '../src/RestaurantImages/github-logo.svg'
import ramen1 from '../src/RestaurantImages/ramen-1.png'
import ramen2 from '../src/RestaurantImages/ramen-2.png'
import ramen3 from '../src/RestaurantImages/ramen-3.png'
import ramen4 from '../src/RestaurantImages/ramen-4.png'
import ramen5 from '../src/RestaurantImages/ramen-5.png'
import ramen6 from '../src/RestaurantImages/ramen-6.png'
import ramen7 from '../src/RestaurantImages/ramen-7.png'
import salad1 from '../src/RestaurantImages/salad-1.png'
import salad2 from '../src/RestaurantImages/salad-2.png'
import salad3 from '../src/RestaurantImages/salad-3.png'
import salad4 from '../src/RestaurantImages/salad-4.png'
import salad5 from '../src/RestaurantImages/salad-5.png'
import pasta1 from '../src/RestaurantImages/pasta-1.png'
import pasta2 from '../src/RestaurantImages/pasta-2.png'
import pasta3 from '../src/RestaurantImages/pasta-3.png'
import pasta4 from '../src/RestaurantImages/pasta-4.png'
import pasta5 from '../src/RestaurantImages/pasta-5.png'
import pasta6 from '../src/RestaurantImages/pasta-6.png'
import pasta7 from '../src/RestaurantImages/pasta-7.png'

// import { homePage } from "./home";
const homePage = (() => {
    let section
    const sectionElement = ()=> {
        section = createElement('section');
        section.classList.add('main-container');
        section.setAttribute('id','page');
        document.body.appendChild(section);
        
    };
    const headerElement = ()=>{
        const header = createElement('header');
        const title = createElement('h1');
        title.textContent = 'The Paths';
        section.appendChild(header);
        header.appendChild(title);
        
    };
    const navElement = ()=>{
        const nav = createElement('nav');
        const buttonContainer = createElement('div');
        const homeButton = createElement('button');
        const menuButton = createElement('button');
        const contactButton = createElement('button');
        buttonContainer.classList.add('button-container');
        homeButton.textContent = 'Home';
        menuButton.textContent = 'Menu';
        contactButton.textContent = 'Contact';
        section.appendChild(nav);
        nav.appendChild(buttonContainer);
        buttonContainer.appendChild(homeButton);
        buttonContainer.appendChild(menuButton);
        buttonContainer.appendChild(contactButton);
    };
    const mainElement = ()=>{
        const main = createElement('main');
        const card = createElement('div');
        const price = createElement('p');
        const placeHolder = createElement('div');
        const photo = createElement('img');
        const seperator = createElement("seperator");
        const description = createElement('div');
        const foodName = createElement('h2');
        const ingredients = createElement('p');
        const menuItemsRamen =[{
            name: 'Chicken Ramen',
            src: ramen1,
            ingredients: 'chicken broth: chicken chashu, wood ear mushrooms,fried onion, grated cheese » served with thin noodles.',
            price: '$15'
        },
        {
            name: 'Shrimp Ramen',
            src: ramen2,
            ingredients: 'shrimp broth: shrimps, cilantro, lime and chilli sauce, grated garlic, scallions.',
            price: '$18'
        },
        {
            name: 'Shio Black',
            src: ramen3,
            ingredients: 'shio broth: black garlic oil, kikurage mushrooms, sesame, scallions.',
            price: '$17'
        },
        {
            name: 'Spicy Chicken Ramen',
            src: ramen4,
            ingredients: 'chicken broth: chilli sauce, chicken chashu, tatsu egg, green onion » served with thin noodles',
            price: '$19'
        },
        {
            name: 'Beef Ramen',
            src: ramen5,
            ingredients: 'beef broth: beef chunks, lime, cilantro, red pepper, onions » served with thin noodles',
            price: '$13'
        }]
        seperator.classList.add("seperator");
        card.classList.add('card-container');
        placeHolder.classList.add('logo-placeholder');
        section.appendChild(main);
        photo.src = ramen1;

        price.textContent = '$20';
        foodName.textContent = 'Ramen'
        ingredients.textContent = 'scallions, meat, egg, and good shit'
        // append elements
        main.appendChild(card);
        card.appendChild(price);
        card.appendChild(placeHolder);
        placeHolder.appendChild(photo);
        card.appendChild(seperator);
        card.appendChild(description);
        description.appendChild(foodName);
        description.appendChild(ingredients);
       
    };
    const footerElement = ()=>{
        const footer = createElement('footer');
        const paragraph = createElement('p');
        const link = createElement('a');
        const logo = createElement('img');
        paragraph.textContent = 'Copyright © 2021 AminuMado';
        link.href = 'https://github.com/AminuMado';
        link.target = 'blank';
        logo.src = gitLogo;
        link.appendChild(logo);
        footer.appendChild(paragraph);
        footer.appendChild(link);
        section.appendChild(footer);
        footer.classList.add('footer')
        logo.classList.add('github-logo')
    };
    function renderPage(){
        sectionElement();
        headerElement();
        navElement();
        mainElement();
        footerElement();
    };
    function createElement(element){
        return document.createElement(element);
    };

    

    return{ renderPage };

})();

homePage.renderPage()
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
import salad1 from '../src/RestaurantImages/salad-1.png'
import salad2 from '../src/RestaurantImages/salad-2.png'
import salad3 from '../src/RestaurantImages/salad-3.png'
import salad4 from '../src/RestaurantImages/salad-4.png'
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
        }];

        const menuItemsSalad =[{
            name: 'Classic Spinach',
            src: salad1,
            ingredients: 'Baby Spinach and Crouton',
            price: '$5'
        },
        {
            name: 'Greek Salmon',
            src: salad2,
            ingredients: 'Salmon, Romaine Lettuce, Cucumber, Crouton',
            price: '$8'
        },
        {
            name: 'Kale Caesar',
            src: salad3,
            ingredients: 'Kale, Roasted Chicken, Cheese, Grape Tomatoes, Croutons, Caesar Dressing',
            price: '$9'
        },
        {
            name: 'Chicken Ceasar',
            src: salad4,
            ingredients: 'Kale, Romaine, Roasted Chicken, Avocado, Shaved Parmesan, Caesar Dressing',
            price: '$10'
        }];
        const menuItemsPasta =[{
            name: 'Brocolli',
            src: pasta1,
            ingredients: 'Spaghetti, Brocolli, Sesame, Ground Beef',
            price: '$12'
        },
        {
            name: 'Parmesian',
            src: pasta2,
            ingredients: 'Spaghetti, Parmesian, Chicken Strips',
            price: '$13'
        },
        {
            name: 'Grape Tomato',
            src: pasta3,
            ingredients: 'Spaghetti, Grape Tomato, Shaved Parmesian',
            price: '$19'
        },
        {
            name: 'Classic',
            src: pasta4,
            ingredients: 'Spaghetti, Tomato Sauce',
            price: '$10'
        },
        {
            name: 'Meatball',
            src: pasta5,
            ingredients: 'Spaghetti, Meatball, Tomato Sauce',
            price: '$18'
        },
        {
            name: 'Sausage',
            src: pasta6,
            ingredients: 'Spaghetti, Sausage Strips',
            price: '$16'
        },
        {
            name: 'Clam',
            src: pasta6,
            ingredients: 'Spaghetti, Small Clams',
            price: '$22'
        }];
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
import ramen1 from '../src/RestaurantImages/ramen-1.png'
import ramen2 from '../src/RestaurantImages/ramen-2.png'
import ramen3 from '../src/RestaurantImages/ramen-3.png'
import ramen4 from '../src/RestaurantImages/ramen-4.png'
import ramen5 from '../src/RestaurantImages/ramen-5.png'
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

const menu = (() => {
    function render() {
        const content = document.querySelector('#content');
        const pastaContainer = document.createElement('div');
        const ramenContainer = document.createElement('div');
        const saladContainer = document.createElement('div');
        const pastaHeader = document.createElement('h1');
        const ramenHeader = document.createElement('h1');
        const saladHeader = document.createElement('h1');
        // TEXT NODES
        const pastaText = document.createTextNode('Pasta');
        const ramenText = document.createTextNode('Ramen');
        const saladText = document.createTextNode('Salad');
        //Appends
        pastaHeader.appendChild(pastaText);
        ramenHeader.appendChild(ramenText);
        saladHeader.appendChild(saladText);
        
        pastaContainer.appendChild(pastaHeader);
        ramenContainer.appendChild(ramenHeader);
        saladContainer.appendChild(saladHeader);

        function renderPastaMenu(menu){
            menu.forEach(item => {
                menu[item] = createMenuCard();
                appendCardElements(menu[item]);
                setCardDetails(menu[item],item);
                setCardAttributes(menu[item]);
                menu[item].card.classList.add('card-container');
                pastaContainer.appendChild(menu[item].card);
            })
        };
        function renderRamenMenu(menu){
            menu.forEach(item =>{
                menu[item] = createMenuCard();
                appendCardElements(menu[item]);
                setCardDetails(menu[item],item);
                setCardAttributes(menu[item]);
                menu[item].card.classList.add('card-container');
                ramenContainer.appendChild(menu[item].card);

            })
        };
        function renderSaladMenu(menu){
            menu.forEach(item =>{
                menu[item] = createMenuCard();
                appendCardElements(menu[item]);
                setCardDetails(menu[item],item);
                setCardAttributes(menu[item]);
                menu[item].card.classList.add('card-container');
                saladContainer.appendChild(menu[item].card);

            })
        };
        function createMenuCard(){
            const card = document.createElement('div');
            const name = document.createElement('h2');
            const price = document.createElement('p');
            const photo = document.createElement('img');
            const seperator = document.createElement("seperator");
            const ingredients = document.createElement('p');
            const placeHolder = document.createElement('div');
            return {card,name,price,photo,seperator,placeHolder,ingredients};
         };
         function appendCardElements(target){
            target.placeHolder.appendChild(target.photo);
            target.card.appendChild(target.price);
            target.card.appendChild(target.placeHolder);
            target.card.appendChild(target.seperator);
            target.card.appendChild(target.name);
            target.card.appendChild(target.ingredients);
            content.appendChild(pastaContainer);
            content.appendChild(ramenContainer);
            content.appendChild(saladContainer);
         };
         function setCardAttributes(target){
            target.placeHolder.classList.add('placeholder');
            target.seperator.classList.add('seperator');
            pastaContainer.setAttribute('id','pastaContainer');
            ramenContainer.setAttribute('id','ramenContainer');
            saladContainer.setAttribute('id','saladContainer');
         }
         function setCardDetails(menuItem, item){
            menuItem.photo.src = item.src;
            menuItem.name.innerText = item.name;
            menuItem.price.innerText = item.price;
            menuItem.ingredients.innerText = item.ingredients;
         };

        const menuItemsRamen =[{
            name: 'Chicken Ramen',
            src: ramen1,
            ingredients: 'chicken broth: chicken chashu, wood ear mushrooms,fried onion, grated cheese » served with thin noodles.',
            price: '$15',
            category: 'ramen'
        },
        {
            name: 'Shrimp Ramen',
            src: ramen2,
            ingredients: 'shrimp broth: shrimps, cilantro, lime and chilli sauce, grated garlic, scallions.',
            price: '$18',
            category: 'ramen'
        },
        {
            name: 'Shio Black',
            src: ramen3,
            ingredients: 'shio broth: black garlic oil, kikurage mushrooms, sesame, scallions.',
            price: '$17',
            category: 'ramen'
        },
        {
            name: 'Spicy Chicken Ramen',
            src: ramen4,
            ingredients: 'chicken broth: chilli sauce, chicken chashu, tatsu egg, green onion » served with thin noodles',
            price: '$19',
            category: 'ramen'
        },
        {
            name: 'Beef Ramen',
            src: ramen5,
            ingredients: 'beef broth: beef chunks, lime, cilantro, red pepper, onions » served with thin noodles',
            price: '$13',
            category: 'ramen'
        }];

        const menuItemsSalad =[{
            name: 'Greek Salmon',
            src: salad2,
            ingredients: 'Salmon, Romaine Lettuce, Cucumber, Crouton',
            price: '$8',
            category: 'salad'

        },
        {
            name: 'Kale Caesar',
            src: salad3,
            ingredients: 'Kale, Roasted Chicken, Cheese, Grape Tomatoes, Croutons, Caesar Dressing',
            price: '$9',
            category: 'salad'
        },
        {
            name: 'Chicken Ceasar',
            src: salad4,
            ingredients: 'Kale, Romaine, Roasted Chicken, Avocado, Shaved Parmesan, Caesar Dressing',
            price: '$10',
            category: 'salad'
        }];

        const menuItemsPasta =[{
            name: 'Brocolli',
            src: pasta1,
            ingredients: 'Spaghetti, Brocolli, Sesame, Ground Beef',
            price: '$12',
            category: 'pasta'
        },
        {
            name: 'Parmesian',
            src: pasta2,
            ingredients: 'Spaghetti, Parmesian, Chicken Strips',
            price: '$13',
            category: 'pasta'
        },
        {
            name: 'Grape Tomato',
            src: pasta3,
            ingredients: 'Spaghetti, Grape Tomato, Shaved Parmesian',
            price: '$19',
            category: 'pasta'
        },
        {
            name: 'Classic',
            src: pasta4,
            ingredients: 'Spaghetti, Tomato Sauce',
            price: '$10',
            category: 'pasta'
        },
        {
            name: 'Meatball',
            src: pasta5,
            ingredients: 'Spaghetti, Meatball, Tomato Sauce',
            price: '$18',
            category: 'pasta'
        },
        {
            name: 'Sausage',
            src: pasta6,
            ingredients: 'Spaghetti, Sausage Strips',
            price: '$16',
            category: 'pasta'
        },
        {
            name: 'Clam',
            src: pasta7,
            ingredients: 'Spaghetti, Small Clams',
            price: '$22',
            category: 'pasta'
        }];
        renderRamenMenu(menuItemsRamen);
        renderPastaMenu(menuItemsPasta);
        renderSaladMenu(menuItemsSalad);
        
    }
    return { render };
  })();
  
  export default menu;
  
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

// import { homePage } from "./home";
const homePage = (() => {
    
    const sectionElement = ()=> {
        const section = createElement('section');
        section.classList.add('main-container');
        section.setAttribute('id','page');
        document.body.appendChild(section);
        return section;
    };
    const headerElement = ()=>{
        const header = createElement('header');
        appendElement(sectionElement,header);
        
    };
    const navElement = ()=>{
        const nav = createElement('nav');
        p
    };
    const mainElement = ()=>{
        const main = createElement('main');
        appendElement(section)
       
    };
    const footerElement = ()=>{
        const footer = createElement('footer');
        appendElement(section,footer);
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
    function appendElement(target,element){
        document.target.appendChild(element);
    }
    

    return{ renderPage };

})();
console.log(homePage)
console.log(homePage())
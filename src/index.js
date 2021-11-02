import homePage from "./home"

const render = (() => {
    function createElement(element){
        return document.createElement(element);
    };

    function renderHeader() {
      const header = createElement('div');
      header.setAttribute('id','header');
      document.body.appendChild(header);
    };
    function renderNav(){
        const nav = createElement('nav');
        nav.setAttribute('id','nav');
        document.body.appendChild(nav);
    };
    function renderContent(){
        const section = createElement('section');
        section.setAttribute('id','content');
        document.body.appendChild(section)
    };
    function renderFooter(){
        const footer = createElement('footer');
        footer.setAttribute('id','footer');
        document.body.appendChild(footer);
    };
    function start(){
        renderHeader();
        renderNav();
        renderContent();
        renderFooter();
    };
    return {start}
  })();
  render.start();
  
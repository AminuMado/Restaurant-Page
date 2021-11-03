const contact = (() => {
    function render() {
        const content = document.querySelector('#content');
        const aboutDiv = document.createElement('div');
        const aboutTxt = document.createElement('h1');
        const text1 = document.createTextNode('Paradis Island');
        aboutDiv.setAttribute('id', 'about');
        aboutTxt.appendChild(text1);
        aboutDiv.appendChild(aboutTxt);
        content.appendChild(aboutDiv);
    };
    return{render};
  })();
  
  export default contact;
  
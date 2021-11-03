const contact = (() => {
    function render() {
        const content = document.querySelector('#content');
        const aboutDiv = document.createElement('div');
        const aboutTxt = document.createElement('h1');
        aboutDiv.setAttribute('id', 'contact');
    
        // TEXT NODES
        const text1 = document.createTextNode('Paradis Island');
    
        // APPENDS
        aboutTxt.appendChild(text1);
        aboutDiv.appendChild(aboutTxt);
        content.appendChild(aboutDiv);
    };
    return{render};
  })();
  
  export default contact;
  
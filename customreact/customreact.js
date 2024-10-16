function customRender(reactElement, container) {
    /* 
    const domElement = document.createElement(reactElemnt.type)
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElemnt.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props){
    if (prop === 'children') continue
    domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://github.com/",
        target: '_blank'
    },
    children: 'Click me to get started'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
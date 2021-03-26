 //Creacting an element
 const divElement = document.createElement('div');
 
 divElement.className = 'red'
 divElement.setAttribute('id', 'red')
 divElement.setAttribute('title', 'Ariful Islam')
 divElement.innerHTML='<h2>Hello World</h2>'
 const container = document.querySelector('.todo-list')
// const a = container.appendChild(divElement)
const b = container.append(divElement, document.createElement('p'), 'Hello World')
//  container.insertBefore(divElement, h2Element)

 console.log(b);
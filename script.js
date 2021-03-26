 //Creacting an element
 const divElement = document.createElement('div');
 
 divElement.className = 'red'
 divElement.setAttribute('id', 'red')
 divElement.setAttribute('title', 'Ariful Islam')
 divElement.innerText='Hello World'
 const container = document.querySelector('.todo-list')
 const h2Element = container.querySelector('h2');
 container.insertBefore(divElement, h2Element)

 console.log(divElement);
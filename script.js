const  chiildren = document.querySelector('.item')
// const parent = chiildren.parentElement;
const grandparent = chiildren.closest('.todo-list')
console.log(grandparent);
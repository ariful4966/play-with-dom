// const  chiildrenOne = document.querySelector('.item')
// // const parent = chiildren.parentElement;
// // const grandparent = chiildren.closest('.todo-list')
// const childrenTwo = chiildrenOne.nextElementSibling
// childrenTwo.style.color = 'orange'
// console.log(childrenTwo);

const  chiildrenTwo = document.querySelector('.item').nextElementSibling;
console.log(chiildrenTwo);
const childrenOne = chiildrenTwo.previousElementSibling;
console.log(childrenOne);
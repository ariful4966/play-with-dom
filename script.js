// document.title = 'Play With DOM'
// console.log(document.images);
// for(let element of document.all){

// }

//GET ELEMENT BY className
let items = document.getElementsByClassName('item'); 
for(let i = 0; i< items.length; i++){
    items[i].style.color = 'red'
}
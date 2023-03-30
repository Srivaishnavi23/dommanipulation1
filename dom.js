//parentelement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);
//childnode
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].backgroundColor='yellow';
//firstchild
console.log(itemList.firstchild);
//firstElementchild
console.log(itemList.firstElementchild);
itemList.firstElementchild.textContent='Hello 1';
//lastchild
console.log(itemList.lastchild);
//lastElementChild
console.log(itemList.lastElementchild);
itemList.lastElementchild.textContent='Hello 4';
//nextsibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';
//createElement
//creatediv
var newDiv = document.createElement('div');
//add class
newDiv.className='hello1';
//add id
newDiv.id = 'hello1'
//add attribute
newDiv.setAttribute('title', 'Hello Div');
console.log(newDiv);
//createtextnode
var newDivText=document.createTextNode('HelloWorld');
//Add text to div
newDiv.appendChild(newDivText);
//console.log(newDiv);
var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv, h1);









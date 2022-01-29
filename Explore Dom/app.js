const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

/*Practicing innerHTML to insert nodes start*/
const div=document.querySelector('div');

//div.innerHTML=div.innerHTML+'<p>Not a good choice. As it rerenders. Performance lost</p>';


//insertAdjacentHTML is not a good choice as we dont have direct element access.
div.insertAdjacentHTML("beforeend",'<div>Still a better Choice. As it is only rendered</div>');

//Hence we will be using document.createElement

const li=document.createElement('li');

li.textContent='item 4';

const list=document.querySelector('ul');

list.appendChild(li);

//Inserting after second node.
const secondLi=list.children[1];
const newLi=document.createElement('li');
newLi.textContent='ItemBaps';

secondLi.insertAdjacentElement('afterEnd',newLi);

//Inserting Dom Elements.

list.prepend(li);

list.lastElementChild.before(li);

list.firstElementChild.replaceWith(li);


button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

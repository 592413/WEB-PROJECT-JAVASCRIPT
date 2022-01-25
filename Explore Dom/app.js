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

div.insertAdjacentHTML("beforeend",'<div>Still a better Choice. As it is only rendered</div>');



button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

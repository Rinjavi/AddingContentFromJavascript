const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';


container.appendChild(content);

const addHead3 = document.querySelector('.content');
const head3 = document.createElement('h3');
head3.classList.add('head3');
head3.style.color = 'blue';
head3.textContent = "I am a blue h3!";

content.appendChild(head3);

const addPara = document.querySelector('.content');
const para = document.createElement('p');
para.classList.add('redText');
para.style.color = "red";
para.textContent = "Hey I'm red";

content.appendChild(para);

// another div starting here 

const secondContainer = document.querySelector('#container');
const secondContent = document.createElement('div');
secondContent.classList.add('secondContent');
secondContent.setAttribute('style', 'background-color: pink; border: 1px solid black;')
container.appendChild(secondContent);

const addHead1 = document.querySelector('.secondContent');
const head1 = document.createElement('h1');
head1.classList.add('head1');
head1.textContent = "I'm in a div.";

const addPara2 = document.querySelector('.secondContent');
const para2 = document.createElement('p');
para2.classList.add('para2');
para2.textContent = 'ME TOO!';

secondContent.appendChild(head1);
secondContent.appendChild(para2);


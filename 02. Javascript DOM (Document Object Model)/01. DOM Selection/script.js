// DOM Selection Method
// -> getElementById() = element
// -> getElementsByTagName() = HTMLCollection
// -> getElementsByClassName() = HTMLCollection
// -> querySelector() = element
// -> querySelectorAll() = nodeList
// =========================================================
// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'WarDhanna';

// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p');

for( let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'lightblue';
}
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontsize = '50px';

//  document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini di ubah dari javascript'

document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';
const p = document.querySelector('p');
p.innerHTML = 'ini diubah melalui javascript';

document.querySelectorAll() -> nodeList
const p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'lightblue';
}


// mengubah node root
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

p4.style.backgroundColor = 'orange';
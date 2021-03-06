// Manipulasi Element
// Method-nya
// -> element.innerHTML
// -> element.style.<propertiCSS>
// -> element.setAttribute()
// 		-> element.getAttribute()
// 		-> element.removeAttribute()
// -> element.ClassList
// 		-> element.ClassList.add()
// 		-> element.ClassList.remove()
// 		-> element.ClassList.toggle()
// 		-> element.ClassList.item()
// 		-> element.ClassList.constains()
// 		-> element.ClassList.replace()
// ....

// =========================================================

// element.innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = '<em>wardhanna</em>';

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = '<div><p>paragraf 1</p></div>';

// =========================================================

// -> element.style.<propertiCSS>
const judul = document.querySelector('#judul');
judul.style.color = 'lightblue';
judul.style.backgroundColor = 'salmon';

// =========================================================

// -> element.setAttribute()
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'wardhanna');
judul.getAttribute('id');
judul.removeAttribute('name');

const a = document.querySelector('section#a a');
a.setAttribute('id', 'link');
a.getAttribute('href');
a.removeAttribute('href');

// =========================================================

// element.classList
const p2 = document.querySelector('.p2');
p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');

p2.classList.remove('label');

p2.classList.toggle('label'); // jika nilai nya true, maka class label akan di tambahkan sedangkan jika nilainya false, maka class label akan di hilangkan
document.body.classList.toggle('biru-muda');

p2.classList.item(2);

p2.classList.constains('dua');
p2.classList.contains('empat');

p2.classList.replace('tiga', 'empat');

// =========================================================

// Manipulasi Node
// Method-nya
// -> document.createElement()
// -> document.createTextNode()
// -> node.appendChild()
// -> node.insertBefore()
// -> parentNode.removeChild()
// -> parentNode.replaceChild()
// .....

// =========================================================

// -> document.createElement()

// buat elemen baru
const pBaru = document.createElement('p');

// =========================================================

// -> document.createTextNode()

const teksPBaru = document.createTextNode('paragraf baru');

// =========================================================

// -> node.appendChild()

// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// =========================================================

// -> node.insertBefore()

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// =========================================================

// -> parentNode.removeChild()

// const sectionA = document.getElementById('a');
const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

// =========================================================

// -> parentNode.replaceChild()

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

// penanda
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
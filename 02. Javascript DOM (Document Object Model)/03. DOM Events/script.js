// Event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM.
// Kejadian tersebut bisa dilakukan oleh user, contohnya (mouse event, keyboard event, dll)
// ataupun dilakukan secara otomatis oleh API, contohnya (animasi selesai di jalankan, halaman selesai di load, dll)

// cara menjalankan event di javascript
// -> Event Handler
// 		-> Inline HTML attribute ( tidak disarankan karena pertama, kita mencampur adukkan file HTML dengan javascript. Kedua, kita memodifikasi HTML-nya padahal kita bisa menambahkan event tanpa menyentuh HTML-nya )
// 		-> Element method
// -> addEventListener()

// ================================================================

// -> Event Handler
// -> Inline HTML attribute
const p3 = document.querySelector('.p3');
function ubahWarnaP3 () {
	p3.style.backgroundColor = 'lightblue';
}

// -> Element method
const p2 = document.querySelector('.p2');
function ubahWarnaP2 () {
	p2.style.backgroundColor = 'lightblue';
}
p2.onclick = ubahWarna;

// ================================================================

// -> addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
	const ul = document.querySelector('section#b ul');
	const liBaru = document.createElement('li');
	const teksLiBaru = document.createTextNode('Item Baru');
	liBaru.appendChild(teksLiBaru);
	ul.appendChild(liBaru);
});

// ================================================================

// -> Event Handler = maka perubahan yang terakhir di lakukan akan menimpa perubahan sebelumnya

const p3 = document.querySelector('.p3');
p3.onclick = function () {
	p3.style.backgroundColor = 'lightblue';
}
p3.onclick = function () {
	p3.style.color = 'red';
}

// ================================================================

// -> addEventListener() = menambah perubahannya
p3.addEventListener('mouseenter', function () {
	p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function() {
	p3.style.backgroundColor = 'lightgreen';
});

// ================================================================

// Daftar Event
// -> Mouse Event :
//	 -> click
//	 -> dblclick
//	 -> mouseover
//	 -> mouseenter
//	 -> mouseup
//	 -> whell
//	 -> ....

// -> Keyboard Event :
//	 -> keydown
//	 -> keypress
//	 -> keyup

// -> Resources Event
// -> Focus Event
// -> View Event :
//	 -> resize
//	 -> scroll

// -> Form Event :
//	 -> reset
//	 -> submit

// -> CSS Animation & Transition Event
// -> Drag & Drop Event
// -> dll.
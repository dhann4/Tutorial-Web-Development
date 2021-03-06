const btnUbahWarna = document.getElementById('btnUbahWarna');
btnUbahWarna.onclick = function() {
	// document.body.style.backgroundColor = 'lightblue';
	// document.body.setAttribute('class', 'biru-muda');
	document.body.classList.toggle('biru-muda');
}


const btnRandom = document.createElement('button');
const btnText = document.createTextNode('Random Color');
btnRandom.appendChild(btnText);
btnRandom.setAttribute('type', 'button');
btnUbahWarna.after(btnRandom);

btnRandom.addEventListener('click', function() {
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});



const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');


sRed.addEventListener('input', function() {
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sGreen.addEventListener('input', function() {
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBlue.addEventListener('input', function() {
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});



document.body.addEventListener('mousemove', function(event) {
	// posisi mouse
	// console.log(event.clientX);
	// console.log(event.clienty);

	// ukuran browser
	// console.log(window.innerWidth);
	// console.log(window.innerHeight);

	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);

	document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});
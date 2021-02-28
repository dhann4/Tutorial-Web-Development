var tanya = true;
while ( tanya ) {

	var hasil = '';
	// menangkap pilihan user
	var usr = prompt('Pilihan: gajah, orang, semut');
	// menangkap pilihan komputer
	// membangkitkan bilang random
	var comp = Math.random();
	if( comp < 0.34 ) {
		comp = 'gajah';
	} else if( comp >= 0.34 && comp < 0.67 ) {
		comp = 'orang';
	} else {
		comp = 'semut';
	}
	// menentukan rules
	if( usr == comp ) {
		hasil = 'SERI!';

	} else if( usr == 'gajah' ) {
		hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';

	} else if( usr == 'orang' ) {
		hasil = ( comp == 'gajah' ) ? 'MENANG!' : 'KALAH!';

	} else if ( usr == 'semut' ) {
		hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!'
	} else {
		hasil = 'Memasukkan pilihan yang salah!'
	}

	// tampilkan hasilnya
	alert('Kamu memimilih : ' + usr + ' dan komputer memilih : ' + comp + '\nMaka hasilnya kamu ' + hasil);

	tanya = confirm('Lagi?');
}
alert('Terima Kasih sudah bermain ^_^')
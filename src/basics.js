/*
 * Literal Objek
 *
 *   Sebuah literal objek ialah sebuah daftar kosong atau lebih pasangan dari nama
 * properti dan nilai yang terkait dari sebuah objek, dipagari di dalam kurung kurawal ({}).
 *
 *   Peringatan:
 *
 *     Jangan gunakan sebuah literal objek di permulaan dari sebuah pernyataan! ini akan mengarahkan
 *   kepada kesalahan (atau akan bertingkah tidak sesuai yang diharapkan),
 *   karena { akan ditafsirkan sebagai permulaan dari sebuah blok.
 *
 *     Berikut adalah sebuah contoh dari sebuah literal objek. Elemen pertama dari sebuah objek car
 *   mendifinisikan sebuah properti, myCar, dan menugaskan sebuah untaian "Saturn" ke padanya.
 *   Elemen kedua properti getCar langsung ditugaskan hasil dari pemanggilan fungsi (_carTypes("Honda"))
 *   Elemen ketiga, properti special gunakan peubah yang ada (sales).
 */

var sales = 'Toyota';

function carTypes(name)
{
	if(name==='Honda')
	{
		return name;
	} else
	{
		return 'Sorry, we don\'t sell'+name+'.';
	}
}

var car = {myCar:'Saturn', getCar: carTypes('Honda'), special: sales};

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota

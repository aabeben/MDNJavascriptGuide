/**
 * Penting: JavaScript sebelum ECMAScript2015 (edisi ke-6)
 * tidak memiliki lingkup blok! Pada JavaScript yang lawas, peubah-peubah
 * yang diperkenalkan di dalam sebuah blok adalah dilingkupi ke fungsi yang
 * mengandungi atau skrip, dan efek dari menyetel mereka melampaui blok itu
 * sendiri. Dengan kata lain, pernyataan blok tidak merumuskan sebuah lingkup.
 *
 * blok-blok "Kesepian" di dalam JavaScript dapat menghasilkan hasil yang 
 * samasekali keseluruhannya berbda daripada hasil yang dihasilkan pada C atau Java.
 * Sebagai contoh:
 */

var x = 1;
console.log(x);
{
	var x = 2;
}
console.log(x);

/**
 * Di atas akan mengeluarkan 2 karena pernyataan var x di dalam si blok adalah
 * di dalam lingkup yang sama var x sebelum si blok. ( Di C atau Java, kode yang
 * serupa akan mengeluarkan 1.)
 *
 * Sejak ECMAScript2015, deklarasi peubah let dan const adalah lingkup-blok.
 * Silakan di halaman rujukan let dan const untuk informasi lebih lanjut.
 */

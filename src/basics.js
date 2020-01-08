/*    Nama properti objek dapat berupa sembarang untaian
 *  termasuk untaian kosong.
 *
 *    Jika nama properti sekiranya bukan sebuah pengenal JavaScript yang sah atau angka
 *  ,ia wajib dipagari di dalam tanda kutip.
 *
 *    Nama properti yang bukan pengenal yang sah tidak dapat diakses sebagai properti titik,
 *  tetapi dapat diakses dan diset dengan notasi mirip-larik (."[]")
 *
 */

var unusualPropertyNames = {
  '':'An empty string',
  '!':'Bang!'
};

console.log(unusualPropertyNames.''); // SyntaxError: Unexpected string
console.log(unusualPropertyNames['']); // An empty string
console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !
console.log(unusualPropertyNames['!']); // Bang!

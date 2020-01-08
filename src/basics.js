/*
 *   Sebagai tambahan, Anda dapat menggunakan sebuah angka atau literal untaian
 * sebagai nama dari sebuah properti atau menyarangkan sebuah objek di dalam objek lain.
 */

// Contoh berikut menggunakan pilihan-pilihan tersebut.

var car = {manyCars: {a:'Saab', b:'Jeep'}, 7:'Mazda'};

console.log(car.manyCars['b']); // Jeep
console.log(car[7]); // Mazda

// Literal titik-apung
/*
 * Sebuah literal titik-apung dapat memiliki bagian-bagian berikut:
 *
 * - Sebuah bilangan bulat desimal (basis 10) yang dapat memiliki tanda
 *   (diawali oleh "+" atau "-"),
 *
 * - Sebuah titik desimal ("."),
 *
 * - Sebuah pecahan (angka desimal lain)
 *
 * - Sebuah pangkat
 *
 *   Sebuah bagian pangkat ialah "e" atau "E" diikuti oleh sebuah bilangan bulat, yang dapat
 * memiliki tanda (diawali oleh "+" atau "-").
 *
 *   Sebuah literal titik-apung wajib paling sedikitnya satu digit, dan baik sebuah titik desimal
 * atau "e" (atau "E").
 */
// Lebih singkatnya, sintaksnya ialah:

//[(+|-)][digits].[digits][(E|e)[(+|-)digits]

// Sebagai contoh:
3.1415926
-.123456789
-3.1E+12
.1e-23

/*
 * Jenis Number dan BigInt dapat dinyatakan dalam desimal (basis 10)
 * , heksadesimal (basis 16), oktal (basis 8) dan biner (basis 2).
 *
 * - Sebuah literal bilangan desimal ialah sebuah urutan dari digit-digit tanpa awalan 0 (nol).
 *
 * - Sebuah awalan 0 (nol) pada literal bilangan, atau sebuah awalan 0o (0O) mengindikasikan
 *   bahwa ia adalah bilangan oktal.
 *   Bilangan oktal hanya dapat terdiri dari digit 0-7.
 *
 * - Sebuah awalan 0x (atau 0X) mengindikasikan ia adalah jenis bilangan heksadesimal.
 *   Bilangan heksadesimal dapat terdiri dari digit (0-9) dan huruf-huruf a-f dan A-F.
 *   (Besar kecil karakter tidak merubah nilainya. Maka: 0xa = 0xA = 10 dan 0xf = 0xF = 15.)
 *
 * - Sebuah awalan 0b (atau 0B) mengindikasikan ia adalah literal bilangan biner.
 *   Bilangan biner hanya dapat terdiri dari digit 0 dan 1.
 */
// Beberapa contoh dari literal bilangan adalah:
0, 117, -345, 123456789123456789n // (desimal, basis 10)
015, 0001, -0o77, 0o777777777777n // (oktal, basis 8)
0x1123, 0x00111, -oxF1A7, 0x123456789ABCDEFn // (heksadesimal, "hex" atau basis 16)
0b11, 0b0011, -0b11, 0b11101001010101010101n // (biner, basis 2)

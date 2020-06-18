/**
 * Pernyataan-pernyataan kondisional
 *
 * Sebuah pernyataan kondisional adalah sebuah himpunan perintah-perintah
 * yang tereksekusi jika sebuah kondisi tertentu ialah benar.
 * JavaScript mendukung dua pernyataan kondisional: if...else dan switch.
 *
 * pernyataan if...else
 * 
 * Gunakan pernyataan if untuk mengeksekusi sebuah pernyataan jika sebuah kondisi logika
 * ialah benar. Gunakan klausa else yang bersifat opsional untuk mengeksekusi sebuah
 * pernyataan jika kondisi ialah salah.
 * Sebuah pernyataan if tampak seperti berikut:
 *
 * if (kondisi) {
 *   pernyataan_1;
 * } else {
 *   pernyataan_2;
 * }
 *
 * Di sini, kondisi dapat berupa sembarang ekspresi yang berevaluasi benar atau salah.
 * (Lihat Boolen untuk penjelasan perihal apa yang bernilai benar atau salah.)
 *
 * Jika kondisi bernilai benar, pernyataan_1 akan dieksekusi. Sebaliknya, pernyataan_2 dieksekusi.
 * pernyataan_1 dan pernyataan_2 dapat berupa sembarang pernyataan, termasuk pernyataan-pernyataan
 * if bersarang lebih lanjut.
 *
 * Anda juga dapat memejemukan pernyataan-pernyataan mengunakan else if untuk menguji banyak kondisi-
 * kondisi secara berurutan, sebagimana seperti yang berikut:
 *
 * if (kondisi_1) {
 *   pernyataan_1;
 * } else if (kondisi_2) {
 *   pernyataan_2;
 * } else if (kondisi_n) {
 *   pernyataan_n;
 * } else {
 *   pernyataan_akhir;
 * }
 *
 * Pada kasus banyak kondisi-kondisi, hanya kondisi logika yang pertama yang bernilai benar
 * yang akan dieksekusi. Untuk mengeksekusi banyak pernyataan-pernyataan, gabungkan mereka di
 * dalam sebuah pernyataan blok ({ ... }).
 *
 * Praktek terbaik
 *
 * Umumnya, adalah praktek bagus untuk selalu menggunakan pernyataan-pernyataan blok---khususnya
 * ketika menyarangkan pernyataan-pernyataan if:
 *
 * if (kondisi) {
 *   pernyataan_1_berlari_jika_kondisi_ialah_benar;
 *   pernyataan_2_berlari_jika_kondisi_ialah_benar;
 * } else {
 *   pernyataan_3_berlari_jika_kondisi_ialah_salah;
 *   pernyataan_4_berlari_jika_kondisi_ialah_salah;
 * }
 *
 * Adalah tidak bijak menggunakan penugasan-penugasan sederhana di dalam sebuah ekspresi kondisional,
 * karena si penugasan dapat membingungkan sebab mirip persamaan ketika melihat sekilas dari si kode.
 *
 * Sebagai contoh, jangan tulis kode seperti ini:
 * // Rentan salah baca seolah "x == y"
 * if (x = y) {
 *  pernyataan_pernyataan_di_sini;
 * }
 *
 * Jika anda perlu untuk menggunakan penugasan di dalam sebuah ekspresi kondisional,
 * sebuah praktek lazim ialah menempatkan kurung tambahan di sekeliling penugasan, seperti berikut:
 *
 * if ( (x = y)) {
 *   pernyataan-pernyataan di sini;
 * }
 *
 * Nilai-nilai bersifat salah
 *
 * Nilai-nilai berikut bernilai salah (dikenal sebagai nilai-nilai salah):
 * - false
 * - undefined
 * - null 
 * - 0 
 * - NaN 
 * - untaian kosong ("")
 * 
 * Nilai-nilai lainnya---termasuk semua objek-objek---bernilai benar ketika dilewatkan pada
 * sebuah pernyataan kondisional
 */

/**
 * Perhatian: Jangan bingung untuk membedakan antara nilai bolean primitif true dan false dengan
 * nilai true dan false dari objek Boolean!
 *
 * Sebagai contoh:
 * 1 | var b = new Boolean(false);
 * 2 | if (b)  // kondisi ini akan bernilai benar
 * 3 | if (b == true) // kondisi ini akan bernilai salah
 *
 * Contoh
 *
 * Pada contoh berikut, fungsi checkData kembalikan benar jika jumlah karakter di dalam sebuah
 * objek Text adalah tiga. Sebaliknya, ini menampilkan sebuah alert dan kembalikan salah.
 *
 * 1 | function checkData() {
 * 2 |   if (document.form1.threeChar.value.length == 3 ) {
 * 3 |     return true;
 * 4 |   } else {
 * 5 |     alert(
 * 6 |       'Enter exactly three characters. ' +
 * 7 |       `${document.form1.threeChar.value} is not valid.`);
 * 8 |       return false;
 * 9 |   }
 * 10| }
 *
 * Pernyataan switch
 *
 * Sebuah pernyataan switch mengizinkan sebuah program untuk mengevaluasi sebuah ekspresi dan
 * mencoba untuk mencocokkan si nilai ekspresi dengan label cas. Jika sebuah kecocokan ditemukan,
 * si program mengeksekusi pernyataan yang terkait.
 *
 * Sebuah pernyataan switch tampak sebagai berikut:
 *
 * switch (ekspresi) {
 *   case 

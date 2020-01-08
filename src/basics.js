/*    Pada ES2015, literal cetakan juga tersedia. Literal cetakan dipagari oleh
 *  karakter back-tick (`)(aksen grave) alih-alih tanda kutip ganda atau tunggal.
 *
 *    Untaian cetakan menyediakan gula sintaktik membangun untaian. (Ini mirip dengan
 *  fitur pertukaran untaian pada Perl, Python, dan selebihnya.)
 *
 *    Pilihan, sebuah tanda dapat ditambahkan memperkenankan pembangunan untaian diubahsesuaikan,
 *  menghindari serangan injeksi, atau membangun susunan data tingkat di atasnya dari isi untaian.
 */

// Pembuatan literal untaian dasar
`In JavaScript '\n' is a line-feed.`

// untaian banyak baris
` Pada JavaScript, untaian cetakan dapat lari
  pada lebih banyak baris, yang tidak dapat dilakukan
  pada tanda kutip ganda atau tunggal.
`

// Penukaran untaian
var name = 'Bob', time = 'today';
`Hello ${name}, how are you ${time}`;

// Membangun sebuah awalan permintaan HTTP digunakan untuk menterjemahkan
// penggantian dan pembangunan

POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     {
         "foo":${foo},
	 "bar":${bar}
     }`(myOnReadyStateChangeHandler);

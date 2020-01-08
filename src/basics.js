/*  Literal Objek yang ditingkatkan
 *
 *    Pada ES2015, literal objek diperluaskan mendukung men-set purnarupa saat pembangunan,
 *  steno untuk penugasan foo: foo, pendefinisian metode, pemanggilan super, dan perhitungan
 *  nama properti dengan ekspresi.
 *
 *    Digabungkan, ini semua juga lebih mendekatkan keduanya yakni literal objek dan deklarasi class
 *  dan mengizinkan rancangan berbasis-objek memanfaatkan beberapa kenyamanan yang sama.
 */

var obj = {
  // __proto__
  __proto__: theProtoObj,
  // Steno untuk 'handler: handler'
  handler,
  // Metode
  toString(){
	  // Memanggil super
	  return 'd '+super.toString();
  },
  // Nama properti hasil hitungan (dinamis)
  ['prop_'+(()=>42)()]:42
}

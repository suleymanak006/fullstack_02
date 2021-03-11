//ANALIZ 
// 1. Hicri Takvim ve Miladi takvim icin donusturucu tasarlanacak.
// 2. Miladiye donus icin bir fonksiyon sayfasi acilip fonksiyon olusturulacak.
// 3. Hicriye donus icin bir fonksiyon sayfasi acilip fonksiyon olusturulacak.
// 4. module.export ile fonksiyonlar ihrac edilecek.
// 5. index.js de require ile ithal edilen fonksiyonlar calistirilacak.

const miladiTakvimDonusturme = require("./miladi-converter");//kod ithal edildi.
const hicriTakvimDonusturme = require("./hicri-converter");//kod ithal edildi.

console.log(miladiTakvimDonusturme.miladi(1000));
console.log(hicriTakvimDonusturme.hicri(1000));

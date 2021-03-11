//ANALIZ 
// 1. Hicri Takvim ve Miladi takvim icin donusturucu tasarlanacak.
// 2. Miladiye donus icin bir fonksiyon sayfasi acilip fonksiyon olusturulacak.
// 3. Hicriye donus icin bir fonksiyon sayfasi acilip fonksiyon olusturulacak.
// 4. module.export ile fonksiyonlar ihrac edilecek.
// 5. index.js de require ile ithal edilen fonksiyonlar calistirilacak.

const miladiConvert = require("./miladi-converter");//kod ithal edildi.
const hicriConvert = require("./hicri-converter");//kod ithal edildi.

console.log("Girmis oldugunuz hicri tarihin karsiligi = "+ miladiConvert("2021"));
console.log("Girmis oldugunuz miladi tarihin karsiligi = " + hicriConvert("1440"));

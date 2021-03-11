
function miladiyeCevirFonksiyonu(pValue){
    let miladiTarih = new Date(pValue);
    const tarih = (miladiTarih.getFullYear()-622)*33/32;
    miladiTarih.setFullYear(tarih);
    return miladiTarih.getFullYear();
}
module.exports = {
    miladi: miladiyeCevirFonksiyonu
}

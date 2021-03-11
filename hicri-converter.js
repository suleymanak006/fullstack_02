
function hicriyeCevirFonksiyonu(pValue){
    let hicriTarih = new Date (pValue);
    const tarih = (hicriTarih.getFullYear()*32/33)+622;
    hicriTarih.setFullYear(tarih);
    return hicriTarih.getFullYear();;
}


module.exports = {
    hicri: hicriyeCevirFonksiyonu
}


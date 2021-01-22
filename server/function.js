function getScore(hargaAsli, tebakan) {
    let skor = 0
    if (tebakan <= hargaAsli) {
        skor = (tebakan / hargaAsli) * 100
    } else {
        skor = (hargaAsli / tebakan) * 100
    }
    skor = Math.round(skor * 1) / 1
    
    return skor
}

console.log(getScore(20000, 15000)) // skor kedua
console.log(getScore(20000, 19000)) // skor tertinggi
console.log(getScore(20000, 27000)) // skor ketiga
console.log(getScore(20000, 50000)) // skor terendah


module.exports = { getScore }
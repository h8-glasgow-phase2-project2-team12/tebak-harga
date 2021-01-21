function comparePrice(hargaAsli, tebakan) {
    let selisih = hargaAsli - tebakan
    selisih = Math.abs(selisih)
    return selisih
}

console.log(comparePrice(20000, 19000)) //1000
console.log(comparePrice(15000, 17000)) //2000

function getPoint(array) {
    // contoh array = [
    //     {
    //         username,
    //         selisih,
    //         point: 0
    //     },
    //     {
    //         username,
    //         selisih,
    //         point: 0
    //     }
    // ]
    let penebakTerdekat = ''
    let selisihTerkecil = Infinity
    for (i = 0; i < array.length; i++ ) {
        if (array[i].selisih < selisihTerkecil) {
            selisihTerkecil = array[i].selisih
            penebakTerdekat = array[i].username
        }
    }

    for (i = 0; i < array.length; i++) {
        if (array[i].username == penebakTerdekat) {
            array[i].point += 10
        }
    }

    return array
}

console.log(getPoint([
    {
        username: 'a',
        selisih: 1400,
        point: 0
    },
    {
        username: 'b',
        selisih: 1200,
        point: 0      // point b + 10
    },
    {
        username: 'c',
        selisih: 1800,
        point: 0
    }
]))

function getWinner(array) {
    // contoh array = [
    //     {
    //         username,
    //         point
    //     },
    //     {
    //         username,
    //         point
    //     }
    // ]

    let highestPoint = -Infinity
    let winner = ''

    for (i = 0; i < array.length; i++) {
        if (array[i].point > highestPoint) {
            winner = array[i].username
        }

    }
    
    return winner

}

console.log(getWinner([
    {
        username: 'a',
        point: 10
    },
    {
        username: 'b',
        point: 10
    },
    {
        username: 'c', //winner c
        point: 30
    }
]))

module.exports = { comparePrice, getPoint, getWinner}
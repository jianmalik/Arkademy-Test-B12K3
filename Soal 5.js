function cetak(baris) {
    let randomString = ''
    const
        arr = [],
        karakter = 'abcdefghijklmnopqrstuvwxyz0123456789'
    
    for (let i = 0; i < baris; i++) {
        while (randomString.length <= 32) {
            const random = Math.round(Math.random() * (karakter.length - 2))
            if (!randomString.includes(karakter[random])) {
                randomString += karakter[random]
            }
        }
        arr.push(randomString)
        randomString = ''
    }
    return arr
}

cetak(3).forEach(str => console.log(str))
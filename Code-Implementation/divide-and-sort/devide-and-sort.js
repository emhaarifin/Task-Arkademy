const divideAndSort = (num) => {
    if (typeof num !== 'number') {
        return 'Input harus angka'
    } else {
        const str = num.toString()
        const arr = str.split('0')
        const map = arr.map(item => {
            return item.split('').sort((a, b) => a - b).join('')
        })
        const bundle = map.join('')
        const parse = parseInt(bundle)
        return parse
    }
}


console.log(divideAndSort(32106540987))

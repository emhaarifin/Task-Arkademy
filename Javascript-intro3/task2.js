const getMonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'Desember']
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000);
}

getMonth((error, result) => {
    if (!error) {
        result.map((value) => {
            console.log(value)
        })
    } else {
        console.log(error)
    }
})


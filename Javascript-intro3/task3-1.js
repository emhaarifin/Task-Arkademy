const setAlarm = (hour, minute) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (hour < 24 && minute < 60) {
                if (hour < 10) {
                    hour = "0" + hour
                }
                if (minute < 10) {
                    minute = "0" + minute
                    }
                resolve(`${hour}.${minute}`)
            } else {
                reject(new Error('Gagal setel alarm'))
            }
        }, 3000)
    })
}

setAlarm("25", 10)
    .then((res) => {
        console.log(`Alarm jam ${res} berhasil disetel`)
    })
    .catch((err) => {
        console.log(err.message)
    })




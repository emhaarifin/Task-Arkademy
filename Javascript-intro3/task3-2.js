function checkConnection(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //variable limitMin dan limitMax sebagai asumsi untuk mengetahui kemampuan koneksi internet saat terhubung ke server
            let limitMax = 15000
            let limitMin = 10000
            if (num > limitMin && num < limitMax) {
                resolve('Reload browser untuk memuat server dengan sempurna')
            } if (num < limitMin) {
                resolve('Terhubung ke server dengan sempurna')
            } else {
                reject(new Error('Lakukan Restart Modem'))
            }
        }, 3000)
    })
}

const doCheckConnection = async () => {
    try {
        const firstTest = await checkConnection(7000)
        console.log(firstTest)
        const secondTest = await checkConnection(12500)
        console.log(secondTest)
        const thirdTest = await checkConnection(20000)
        console.log(thirdTest)
    }
    catch (error) {
        console.log(error.message);
    }
}

doCheckConnection()
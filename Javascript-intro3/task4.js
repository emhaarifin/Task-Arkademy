function getNames(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Server Error');
            }
            return response.json()
        })
        .then(result => {
            result.map((list) => {
                console.log(list.name);
            });
        })
        .catch(error => {
            console.log(error);
        });
}

getNames('https://jsonplaceholder.typicode.com/users')
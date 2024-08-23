function fetchPromisified(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then((res) => {
            resolve(res.json());
        });
    });
}

fetchPromisified("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
        console.log(res);
    })
    .then(() => console.log("fetch data succussfully"));

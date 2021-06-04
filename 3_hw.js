const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let answer = new Promise((resolve, rejest) => {
//     fetch(`${API}/catalogData.json`)
//         .then(data => {
//             resolve(data.text());
//         })
// })
// answer.then(data => {
//     console.log(JSON.parse(data));
// });



let answer = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${API}/catalogData.json`, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                reject('Error');
            } else {
                resolve(xhr.responseText);
            }
        }
    };
    xhr.send();
});

answer.then(data => {
    console.log(JSON.parse(data));
});

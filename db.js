var db;
fetch('data.json')
.then(res => res.json())
.then((data) => {
    db=data;
}).catch(err => console.error(err));

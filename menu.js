

fetch('http://localhost:3001/getData/departments').then(async (data) => {

    let jsonData = await data.json();
    console.log(jsonData.rows);

});

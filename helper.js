const viewInfo = (table) =>
    fetch(`http://localhost:3001/getData/${table}`).then(async (data) => {
    
        let info = await data.json();
        return info.rows;
    });


module.exports = {viewInfo}



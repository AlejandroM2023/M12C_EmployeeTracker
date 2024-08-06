const viewInfo = (table) =>
    fetch(`http://localhost:3001/getData/${table}`).then(async (data) => {
    
        let info = await data.json();
        return info.rows;
    });

const addRole = (params) =>{
    const obj = {
        title: params[0],
        salary: parseFloat(params[1]),
        department: params[2]
    }
    console.log(obj);
    fetch(`http://localhost:3001/addData/role`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      });
}   


module.exports = {viewInfo, addRole}



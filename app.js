const fs = require('fs');
const path = require('path');
const os = require('os');

//console.log(`Folder path : ${__dirname}`);
//console.log(`JSON File path ${path.join(__dirname , 'employees' , 'data' , 'employees.json')}`);

//Read file content
fs.readFile(path.join(__dirname , 'people.json'), 'utf-8' , (err , info) => {
    if(err) throw err;
    let employee = JSON.parse(info);
    console.table(employee);
});



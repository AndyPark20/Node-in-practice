
const fs= require('fs');
const { argv } = require('process');


fs.readFile(`./${argv[2]}`,'utf8',(err,res)=>{
    if(err){
      console.log(err);
    }else{
      console.log(res)
    }
})

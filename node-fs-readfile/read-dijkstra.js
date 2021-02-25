const fs = require('fs');


fs.readFile('./dijkstra.txt', 'utf8',(err,res)=>{
  if(err){
    console.log(err)
  }else{
    console.log(res)
  }
})

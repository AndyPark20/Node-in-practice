const fs= require('fs');

fs.readFile('./directory/read.txt','utf8',(req,res)=>{
  if(req){
    console.log(req);
  }else{
    console.log(res);
  }
})

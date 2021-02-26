const fs = require('fs');

const arg = process.argv[2].toString()
fs.writeFile('./directory/write.txt', arg,'utf8',(err,res)=>{
    if(err){
      console.log(err)
    }else{
      console.log('success!')
    }
})

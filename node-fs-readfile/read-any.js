const fs = require('fs');
const { argv } = require('process');

const textUpdate=argv[2].toString()

fs.writeFile('../node-fs-readfile/testing/test.txt', textUpdate, 'utf8',(err,res)=>{
  if(err){
    console.log(err)
  }
});

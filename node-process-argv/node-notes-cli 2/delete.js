const fs = require('fs');

const remove =(index) => {
  fs.readFile('./data.json','utf8',(err,res)=>{
    if(err){
      console.log(err)
    }else{
      const parsed = JSON.parse(res);
      for (const key in parsed.notes){
        if(index === key){
          delete parsed.notes[key]
          fs.writeFile('./data.json',JSON.stringify(parsed,null,2),'utf8',(error,res)=>{
            if(error){
              console.log(error);
            }else{
              console.log('Successful Deleting')
            }
          })
        }
      }
    }
  })
}

module.exports.delete= remove;

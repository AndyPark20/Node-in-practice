const fs= require('fs');


const create=(value)=>{
  if(value){
    fs.readFile('./data.json', 'utf8', (error, req) => {
      if(error){
        console.log('readfile',error)
      }else{
        const parsed = JSON.parse(req);
        parsed.notes[parsed.nextId] = value;
        parsed.nextId++;
        fs.writeFile('./data.json', JSON.stringify(parsed,null,2),(err,res)=>{
          if(err){
            console.log(err)
          }else{
            console.log('success!')
          }
        })
      }
    })
  }
}



module.exports.brandNew = create;

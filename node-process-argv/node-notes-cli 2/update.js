
const fs = require('fs');

const update = (index, quote) => {
  fs.readFile('./data.json', 'utf8', (err, res) => {
    if (err) {
      console.log(err)
    } else {
      const parsed = JSON.parse(res);
      for (const key in parsed.notes) {
        if (index === key) {
          parsed.notes[key] = quote;
          fs.writeFile('./data.json',JSON.stringify(parsed,null,2),'utf8',(error,result)=>{
            if(error){
              console.log(error)
            }else{
              console.log('sucessful!')
            }
          })
        }
      }
    }
  })
}

module.exports.revise = update;

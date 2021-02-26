const fs = require('fs');


const read = () => {
  fs.readFile('./data.json', 'utf8', (err, req) => {
    if (err) {
      console.log(err);
    } else {
      const object = JSON.parse(req)
      const objectData = object.notes
      for (const key in objectData) {
        console.log(`${key}:${objectData[key]}`)
      }
    }
  })
}

module.exports.list = read;

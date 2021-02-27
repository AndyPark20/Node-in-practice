const express = require('express');
const app = express();

app.use(express.json())

let list ={
  "name": "Brendan Eich",
    "course": "JavaScript",
      "score": 100
}

app.post('/api/grades',(req,res)=>{
  console.log(req.body)
})


app.listen(3000,()=>{
  console.log('POST LISTENING TO 3000')
})

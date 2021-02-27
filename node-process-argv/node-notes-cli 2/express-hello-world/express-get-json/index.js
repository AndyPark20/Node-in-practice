const express= require('express');
const app = express();

let list = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
}

app.get('/api/grades',(req,res)=>{
  console.log(res)
      res.status(201).json([list]);

})


app.listen(3000,()=>{
  console.log('Listening!')
})

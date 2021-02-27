const express = require('express');
const fs = require('fs');
const app = express();
const data= require('./data.json');
const { isRegExp } = require('util');


app.use(express.json())

app.get('/api/grades', (req, res,next) => {
  fs.readFile('./data.json', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      if(result){
        const array=[];
        const parsed = JSON.parse(result)
        const notesResult = parsed.notes
        for(const key in notesResult){
          array.push(notesResult[key])
        }
        res.status(200).json(array)
      }else{
        res.status(200).json([])
      }
    }
  })
})

app.get('/api/grades/:id', (req, res,next) => {
  const number= req.params.id
  fs.readFile('./data.json', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
    } else {
      if (result) {
        const array = [];
        const parsed = JSON.parse(result)
        const notesResult = parsed.notes
        for (const key in notesResult) {
          if(number === key){
            return(res.status(201).json(notesResult[key]));
          }
        }
    }
      return (res.status(404).json(`${number} not found`));
  }
  })
})

app.post('/api/grades',(req,res,next)=>{
  if(!req.body){
    req.status(400).json('Please enter a body of response')
  }else{
    fs.readFile('./data.json','utf8',(err,result)=>{
      if(err){
        res.status(404).json('Something went wrong')
      }else{
        let parse= JSON.parse(result);
        let parseResult = parse.notes;
        let nextNumber = parse.nextId++;
        let info = req.body;
        info['id']= nextNumber;
        parseResult[nextNumber] = info;
        fs.writeFile('./data.json',JSON.stringify(parse,null,2),(err,result)=>{
          if(err){
            console.log(err)
          }else{
            res.status(201).json(parse)
          }
        })
      }
    })
  }
})






app.listen(3000, () => {
  console.log('app listening on port 3000')
})

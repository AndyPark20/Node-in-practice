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
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      if (data) {
        const array = [];
        const parsed = JSON.parse(data)
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
    fs.readFile('./data.json','utf8',(err,data)=>{
      if(err){
        res.status(404).json('Something went wrong')
      }else{
        let parse= JSON.parse(data);
        let parseResult = parse.notes;
        let nextNumber = parse.nextId++;
        let info = req.body;
        info['id']= nextNumber;
        parseResult[nextNumber] = info;
        fs.writeFile('./data.json',JSON.stringify(parse,null,2),(err)=>{
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

app.delete('/api/grades/:id',(req,res,next)=>{
  const number = req.params.id
  const parsedNumber = parseInt(number,10);
  if (parsedNumber !== Math.abs(parsedNumber)){
    res.status(400).json('Please enter positive id')
  }else{
    fs.readFile('./data.json','utf8',(error,result)=>{
      if(error){
        console.log(error)
      }else{
        const parse = JSON.parse(result);
        const parsedNotes = parse.notes;
        for(const key in parsedNotes){
          if(parsedNumber===parseInt(key,10)){
            delete parsedNotes[parsedNumber]
            fs.writeFile('./data.json',JSON.stringify(parse,null,2),(err)=>{
              if(err){
                return(res.status(500).json('something went wrong!'))
              }else{
                return(res.status(204).end());
              }
            })
          }else if(!parsedNotes[parsedNumber]){
            return(res.status(404).json(`${parsedNumber} not found`))
          }
        }
      }
    })
  }
})

app.put('/api/grades/:id', (req,res)=>{
  const number = req.params.id;
  const update= req.body
  const parsedNumber = parseInt(number,10);
  if(parsedNumber !== Math.abs(parsedNumber)){
    res.status(400).json('please enter positive id number')
  }else{
    fs.readFile('./data.json','utf8',(req,data)=>{
      const parsed = JSON.parse(data);
      const parsedNotes = parsed.notes;
      for (const key in parsedNotes){
        if (parsedNumber === parseInt(key,10)){
          update['id'] = parsedNumber;
          parsedNotes[key] = update;
          fs.writeFile('./data.json',JSON.stringify(parsed,null,2),(err)=>{
            if(err){
              return(res.status(500).json('something went wrong!'));
            }else{
              return(res.status(200).json(parsedNotes[key]));
            }
          })
        }else if(!parsedNotes[parsedNumber]){
          return (res.status(404).json(`${number} NOT FOUND!`))
        }
      }
    })
  }
})


app.listen(3000, () => {
  console.log('app listening on port 3000')
})

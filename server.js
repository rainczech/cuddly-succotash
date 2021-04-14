//dependency from NODE standard library
const path = require('path')

//dependency from NPM 
const express = require('express');


//dependency from self created stuff



const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;



app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'hello.html'));
  });

  app.post('/foo', (req, res) => {
    const {Number} = req.body;  
    res.json(Number);
  })

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
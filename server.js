//dependency from NODE standard library
const path = require('path')

//dependency from NPM 
const express = require('express');

//dependency from self created stuff



const app = express()
const PORT = process.env.PORT || 3001;



app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'hello.html'));
  });

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
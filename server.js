const express = require('express');

const app = express()
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Welcome To Heroku!');
  });

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
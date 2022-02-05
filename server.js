const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const {animals} = require('./data/animals')
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
//const path = require('path')

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'))

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);







//routes








//listen on port
app.listen(PORT , ()=> {
    console.log(` api server now on port ${PORT}`)
});
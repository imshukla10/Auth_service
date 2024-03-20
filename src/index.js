const express = require('express');
const app = express();


const {PORT} = require('./config/serverConfig');


app.get('/',(req,res)=>{
    res.send('Hello');
})

const prepareAndStartServer = () => {
    app.listen(PORT,(req,res)=>{
        console.log(`Server started on port ${PORT}`);
    })
}

prepareAndStartServer();
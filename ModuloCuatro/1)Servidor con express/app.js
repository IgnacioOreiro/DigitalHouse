const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    req.send('Hola Mundo');
});

app.listen(3000,()=>
console.log('SV corriendo')
)
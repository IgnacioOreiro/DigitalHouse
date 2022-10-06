const express = require("express");
const app = express();
const path = require("path");


app.listen(3000,()=>
console.log('SV corriendo')
);

app.get('/', (req,res)=>{
    res.send(path.resolve(__dirname, 'C:/Users/User/OneDrive/Escritorio/DigitalHouse/ModuloCuatro/1)Servidor con express/vistas/index.html'));

    //console.log(__dirname);
    //res.sendFile('C:\Users\User\OneDrive\Escritorio\DigitalHouse\ModuloCuatro\1)Servidor con express')
});


app.get('/contacto',function(req, res){
    res.send('Dejanos tu contacto!')
});

app.get('/un-array',function(req, res){
    res.send([1,2,3,4])
});

app.get('/un-objeto',function(req, res){
    res.send({name: "Nacho", edad:20});
});


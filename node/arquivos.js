 const {error} = require('console');
 let {readFile, writeFile} = require('fs');

 readFile("arquivo.txt","utf-8",(error,texto)=>{
    if(error){
        throw error;
    } else{
        console.log(texto)
    }
 })

 writeFile("arquivo.text","Texto feito por write file",(error)=>{
 if(error){
    throw error;
 }else{
    console.log("Escreveu de forma correta")
 }
})


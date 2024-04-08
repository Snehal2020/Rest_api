const express=require('express');
const fs = require('fs');
require('./db')
const model = require('./Model')
const app=express();
const Product=require('./data.json')

app.get('/',async(req,res)=>{
    try {
        const {company,name,sort,select}=req.query;
        const obj={}
        if(company){
            obj.company=company;
        }
        if(name){
            obj.name=name;
        }
        apidata= model.find(obj)
        if(sort){
            let sortfix=sort.replace(","," ");
            apidata=apidata.sort(sortfix)
        }
        if(select){
            let selectfix=select.replace(","," ");
            apidata=apidata.select(selectfix)
        }
        console.log(obj)
        const data=await apidata
        res.send(data)
       } catch (error) {
        console.log(error)
       }
})
app.get('/about',(req,res)=>{
    res.send("Hello this is about page");
})
const start=async()=>{
   try {
    await model.deleteMany()
    const data=await model.create(Product)
    console.log("Success")
   } catch (error) {
    console.log(error)
   }
}

start()
app.listen(3000||port,()=>{
    console.log("listening on 3000 port")
})

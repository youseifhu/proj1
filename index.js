const express = require("express");
const port = 3000;
const app = express();
app.use((req,res,next)=>{
    console.log('method',req.method,'url',req.url);
    next()
})
app.get('/',(req,res)=>{
    res.send(`hello world`)
})
app.get('/about',(req,res)=>{
    res.send(`about page`)
})
app.get('/conatct',(req,res)=>{
    res.send(`conatct page`)
})
app.get('/info',(req,res)=>{
    res.send(`info page`)
})

app.listen(port, () => {
  console.log(`server is running on ${port} `);
});

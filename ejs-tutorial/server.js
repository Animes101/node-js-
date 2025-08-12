const express=require('express');
const app=express();
const PORT=3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json()); 

app.set("view engine", "ejs")

const langue=[];

app.get('/', (req,res)=>{


        res.render('index.ejs', {langue:langue})

})


app.post('/', (req,res)=>{

    const programming=req.body.programming;

    langue.push(programming);

    res.redirect('/')

})

app.get('/contact', (req,res)=>{


        res.render('contact.ejs')

})


app.listen(PORT, ()=>{
    
    console.log(`server is running  on http://localhost:${PORT}`)
})
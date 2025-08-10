///module import file

const {name, age}=require ('./module')

console.log(name());
console.log(age());



// fs file system module

const fs=require('fs');

// writeFile
fs.writeFile('output.text', 'Hello server', (err)=>{

    if(err){
        console.log(err);
    }else{
        console.log('successfully wirte the file')
    }
})

//redeFile

fs.readFile('output.text','utf-8',(err,data)=>{

    if(err){

        console.log(err);
    }else{
        console.log(data);
    }
})

//appendfile

fs.appendFile('output.text', 'some add is appended file', (err)=>{

    if(err){

        console.log(err);
    }else{
        console.log('sccesfully append the file')
    }
})

//delet file

fs.unlink('delet.text',(err)=>{

    console.log(err? err: 'successfully delet')
})


//rename file

fs.rename('output.text', 'output_rename.text', (err)=>{
    if(err){

        console.log(err);
    }
})

//exsites file


fs.exists('output_rename.text',(exists)=>{



    console.log(exists ? 'file exists': 'nod found file')
})


//os and path
// কম্পিউটারের অপারেটিং সিস্টেম সম্পর্কিত তথ্য নেওয়া
// const os=require('os')

// console.log(os.type)
// console.log(os.platform())
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.networkInterfaces());
// console.log(os.hostname());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.homedir());
// console.log(os.uptime());
// console.log(os.version());



const path = require('path');


console.log(path.extname('server.js'));
console.log(path.join(__dirname+ '/views'))


const http=require('http')
const port=3000;;


const server= http.createServer((req,res)=>{

    res.end('hello server')
})

server.listen(port,()=>{

    console.log(`server is running of port http://localhost:${port}`);
})


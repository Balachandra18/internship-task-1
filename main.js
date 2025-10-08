let exress=require('express');
let app=exress();
let cors=require('cors');
let bodyparser=require('body-parser')
app.use(cors())
let dotenv=require('dotenv');
dotenv.config()
app.use(bodyparser.json());
let pgsql=require('./PsqldbConnection.js')

// console.log(process.env.psqlurl);
let routes=require('./Routes/Signupform')

let createtable=async()=>{
    try {
        await pgsql.query(`
            CREATE TABLE UsersData (
                UserID SERIAL PRIMARY KEY,
                Name VARCHAR(110),
                Email VARCHAR(100) UNIQUE,
                Password VARCHAR(50),
                Gender VARCHAR(10),
                MobileNumber BIGINT UNIQUE
            );
        `);
        console.log("success")
    } catch (error) {
        console.log("error")
    }

}
createtable()

app.use('/User',routes);
// app.post('/User/signup',(req,res)=>{
//     console.log(res);
//     res.status(200).json({message:"No Error"})
// })

app.use((req,res)=>{
    res.send('<h1>Server is Running</h1>')
})
app.listen(5000,()=>{
    console.log("server Runing")
})

let pgsql=require('../PsqldbConnection');
let express=require('express');
let routes=express.Router()
let {Pool}=require('pg')


let Postdata=async (req,res)=>{
    try {
        let {name,email,password,gender,mobilenumber}=req.body;
    let query=`INSERT INTO USERSDATA(name,email,password,gender,mobilenumber)VALUES($1,$2,$3,$4,$5)`
   let values=[name,email,password,gender,mobilenumber];
   let result=await pgsql.query(query,values);
   res.status(200).json({message:"registerd success fully"})
    } catch (error) {
        console.error (error);
       res.status(500).json({message:"Server error or email already exists"});
    }
}

let loginuser=async (req,res) => {
    try{
    let {email,password}=req.body;
    let query=`SELECT * FROM usersdata WHERE email=$1`;
    let result =await pgsql.query(query,[email]);
    if(result.rows.length==0){
        res.status(200).json({message:"User Not Found"})
    }else{
        res.status(200).json({rows:result.rows[0]})
    }


    }catch(error){
        console.log(error)
        res.status(500).json({message:"Server Error"})
    }
}


routes.post('/signup',Postdata);
routes.post('/login',loginuser)
module.exports=routes
let {Pool}=require('pg');
let dontenv=require('dotenv');

const pool=new Pool({
    connectionString:process.env.psqlurl,
    ssl:{
        rejectUnauthorized:false
    }
})
module.exports=pool


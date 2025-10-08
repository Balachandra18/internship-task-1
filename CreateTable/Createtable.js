// let pgsql=require('../PsqldbConnection');
// let createtable=async()=>{
//     try {
//         await pgsql.query(`
//             CREATE TABLE UsersData (
//                 UserID SERIAL PRIMARY KEY,
//                 Name VARCHAR(110),
//                 Email VARCHAR(100) UNIQUE,
//                 Password VARCHAR(50),
//                 Gender VARCHAR(10),
//                 MobileNumber BIGINT UNIQUE
//             );
//         `);
//         console.log("success")
//     } catch (error) {
//         console.log(error)
//     }

// }
// module.exports=createtable; 
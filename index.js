require('dotenv').config();
//console.log(process.env);
const express = require('express');
const cors = require ('cors');
//const {Pool} = require('pg');
//const { query } = require('./helpers/db');
const { todoRouter } = require('./routes/todo.js');

const port = process.env.PORT

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false})); 
app.use('/',todoRouter);


//const port = 3001;

// app.get("/", async (req,res)=>{
    
//     console.log(query)
//     try{
//         const result = await query('select * from task');
//         const rows = result.rows ? result.rows : [];
//         res.status(200).json(result.rows);

//     } catch (error) {
//         console.log(error)
//         res.statusMessage = error
//         res.status(500).json({error: error.message})
//     }
          
// });


// const openDb = () => {
//     const pool = new Pool({
//         //user: 'postgres', 
//         //host: 'localhost',
//         //database: 'todo',      
//         //password: '052025',
//         //port: 5432,
//         user: process.env.DB_USER,
//         host: process.env.DB_HOST,
//         database: process.env.DB_NAME,
//         password: process.env.DB_PASSWORD,
//         port: process.env.DB_PORT
//     });
//     return pool;

// }

// app.post("/new",(req,res) => {
//     const pool = openDb();

//     pool.query('insert into task (description) values ($1) returning *',
//     [req.body.description],
//     (error, result) => {
//         if (error) {
//           res.status(500).json({error: error.message})
//         } else {
//           res.status(200).json({id: result.rows[0].id});
//         }
//     });   
// });

// app.post("/new",async (req,res) => {
//     try {
//         const result = await query('insert into task (description) values ($1) returning *',
//         [req.body.description]);
//         res.status(200).json({id: result.rows[0].id});
//     } catch (error) {
//       console.log(error)
//       res.statusMessage = error
//       res.status(500).json({error: error})  
//     }
// })


// app.delete('/delete/:id', async(req,res) => {
//     const pool = openDb();
//     const id = parseInt(req.params.id);
//     pool.query('delete from task where id = $1',
//      [id],
//     (error, result) => {
//         if (error) {
//             res.status(500).json({error: error.message})
//         } else {
//             res.status(200).json({id: id});
//         }
//     });
// });

// app.delete('/delete/:id', async(req,res) => {
//     const id = Number(req.params.id)
//     try {
//         const result = await query('delete from task where id = $1',
//         [id]);
//         res.status(200).json({id: id});
//     } catch (error) {
//         console.log(error)
//         res.statusMessage = error
//         res.status(500).json({error: error})
//     }
// });


app.listen(port, () => {
    console.log(`backend Server is runing on port ${port}`);
});

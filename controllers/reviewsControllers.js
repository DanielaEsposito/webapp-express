const connection=require("../db/connectionDb");
//index
function index (req,res){
    const sql= 'SELECT * FROM movies'
    connection.query(sql,(err, results)=>{
        if (err)return res.status(500).json ({
            error:'Database query failed'
            
        })
        res.json(results);
        console.log(res);
    })
};
//show
function show (req,res){

};
//create
function create (req,res){

};
//modify
function modify (req,res){

};
//update
function update (req,res){

};
//destroy
function destroy (req,res){

};
module.exports ={index, show, create, modify, update, destroy};

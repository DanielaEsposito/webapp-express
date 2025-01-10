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
    const sqlMovies ="SELECT * FROM `movies` WHERE `id` = ? ";
    connection.query(sqlMovies,[id],(err, results)=>{
        if(err){
           console.log(err);
           return res.tatus(500).json({
           error: "Database queri failed"})  ;     
        }
        if(results.lenght === 0){
           return res.status(404).json({error: "post not found"});
        }
   
        
       })
       let movie=results[0];
       const sqlreviews = `
       SELECT *
       FROM reviews
       INNER JOIN movies
       ON  = movies.id = reviews.movie_id
       WHERE movies.id = ?`
       connection.query(sqlreviews,[id],(err, results)=>{
           if(err)return res.status(500).json ({
               error:'Database query failed'  
           })
           post.tags=results;
           res.json(movie);
       })
       ;
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
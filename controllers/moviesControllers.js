const connection=require("../db/connectionDb");
//index
function index (req,res){
    const sql= 'SELECT * FROM movies'
    connection.query(sql,(err, results)=>{
        if (err)return res.status(500).json ({
            error:'Database query failed'
            
        })
        const movies = results.map(movie => ({
            ...movie,
            image: generatePathIgm(movie.image)
        }))
        res.json({
            status: "ok",
            movies
        });
        console.log(res);
    })

};
//show
function show (req,res){
    const id = parseInt(req.params.id);
    const sqlMovies ="SELECT * FROM `movies` WHERE `id` = ? ";
    connection.query(sqlMovies,[id],(err, results)=>{
        if(err){
           console.log(err);
           return res.tatus(500).json({
           error: "Database queri failed"})  ;     
        }
        if(results.lenght === 0){
           return res.status(404).json({error: "movie not found"});
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

const generatePathIgm = (imgName)=>{
    const {APP_HOST, APP_PORT}=process.env;
    return `${APP_HOST}:${APP_PORT}/img/${imgName}`

};
module.exports ={index, show, create, modify, update, destroy};
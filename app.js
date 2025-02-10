var express = require('express');
var router = express.Router();
var app= express();
const todos =[];
app.use(express.json());
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.post('/api/todo/create',  (req,res)=>{
   todos.push(req.body)
    res.send(todos)
})
module.exports = router;

app.get('/',(req,res)=>{

  res.send({message:"hello to  my website"})
  res.end()
},)
app.listen(8082,()=>{

      console.log("Server running on port 8080")
    }



)

app.get('/file',(req,res)=>{

  res.sendFile(__dirname+'/public/index.html');


})
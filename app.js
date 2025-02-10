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
app.put('/api/todo/update/:id',  (req,res)=>{
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    todos[todoIndex].title = req.body.title ;
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
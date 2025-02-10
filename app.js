var express = require('express');
var router = express.Router();
var app = express();
let todos = [{id: 1, title: "new title"}, {id: 2, title: "new title"}];
app.use(express.json());
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
app.post('/api/todo/create', (req, res) => {
    todos.push(req.body)
    res.send(todos)
})
app.put('/api/todo/update/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    if (todos.length === 0) {
        res.send('the array is empty ');

    } else {
        todos = todos.map((todo) => {
            console.log(todo.id)
            return todo.id === Number(id) ? {...todo, ...req.body} : todo
        })
        res.send(todos)
    }
})
app.delete('/api/todos/delete/:id',(req,res)=>{


    const id = Number(req.params.id);
    todos = todos.filter(todo=>todo.id !==id)
 res.send(todos)

})
module.exports = router;

app.get('/', (req, res) => {

    res.send({message: "hello to  my website"})
    res.end()
},)
app.listen(8082, () => {

        console.log("Server running on port 8080")
    }
)

app.get('/file', (req, res) => {

    res.sendFile(__dirname + '/public/index.html');


})
//routes/api/todolist
import { Router } from "express"
//Load todo Model
import todo from '../../models/todo'


Router.get('/todos', (req, res, next) => {
 //this will return all the data, exposing only the id and action field to the client
 todo.find({},'action')
 .then( data => res.json(data))
 .catch(next)
})

Router.post('./todos',(req,res,next)=>{
    if(req.body.action){
        todo.create(req.body)
        .then(data => res.json(data))
        .catch(next)
    }
    else{
        res.json({
            error: 'The Input field is empty'
        })
    }
})

Router.delete('/todos/',(req,res,next)=>{
    todo.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = Router
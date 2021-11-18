import { model, mongo } from "mongoose";
import { string } from "prop-types";

const TodoScheme = new mongo.Schema({
action: {
    type: string,
    required: [true, 'The todo text field is required']
}
})

//create model for todo
module.exports = Todos = model('todolist',TodoScheme)
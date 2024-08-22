import mongoose, { Schema } from "mongoose";
const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
    
  },
  userId: {
    type: String,
    required: true,
    
  },
  description : {
    type: String,
    required: true,
  },
});

const  TodoList= mongoose.model("TodoList", todoSchema);

export default TodoList;

import responseMessage from "../customApiResponse/apiResponse.js"
// import authenticateToken from "../middlerware/authenticateToken.js"
import TodoList from "../models/todo.model.js"

const createTodoList=async(req,res)=>{
    const { title, description } = req.body;
    const userId = req.userId.userId
    if (!title ||!description ) {
      return res.status(400).send(responseMessage.error("Please provide all required fields", error));
    }
  try {
    const list = await TodoList.create({
        title,
        description,
        userId:userId,
      });
      res.send(responseMessage.success("Todo list created successfully", list));  } catch (error) {
    return res.status(500).send(responseMessage.error(error, error));

  }             
} 
const updateTodoList=async(req,res)=>{
    const id=req.params.id;
    const { title, description } = req.body;
    if (!title ||!description ) {
      return res.status(400).send(responseMessage.error("not updated anything"));
    }
    if (!id) {
      return res.status(400).send(responseMessage.error("Please provide a valid ID to update", error));
    }
    try {
      const todoUpdate = await TodoList.findById(id);
      if (!!!todoUpdate) {
        return res.status(400).send(responseMessage.error("not found "));
      } 
      todoUpdate.title = title;
      todoUpdate.description = description;
      await todoUpdate.save();
      res.send(responseMessage.success("Todo list updated successfully", todoUpdate));
    } catch (error) {
       return res.status(500).send(responseMessage.error(error));
    } 

  }
  
  const deleteTodoList=async(req,res)=>{
      const { id } = req.params;
      try {
        const deleteTodo = await TodoList.findByIdAndDelete(id);
        if (!deleteTodo) {
          return res.status(404).send(responseMessage.error("todo list not found"));
        }
        //  await blog.remove();
        return res
          .status(200)
          .send(responseMessage.success("Your current Todo list deleted successfully"));
      } catch (error) {;
        return res
          .status(500)
          .send(
            responseMessage.error(
              "An error occurred while deleting the current todo list",
            )
          );
      }
  
  }
  const getTodoList=async(req,res)=>{
      const userId = req.userId.userId
      if(!userId){
        return res.status(401).send(responseMessage.error("list not found"));
      }
      try {
        const findList= await TodoList.find({userId})
        const total=findList.length
        res.send(responseMessage.success("Your current Todo list", findList,1,5,total));
      } catch (error) {
        
      }
      
  }
export { createTodoList,updateTodoList,deleteTodoList,getTodoList } ;

import express from "express"
import authenticateToken from "../middlerware/authMiddleware.js"
import { createTodoList,updateTodoList, deleteTodoList,getTodoList } from "../controller/todoActivity.controller.js"
const router = express.Router()

router.route("/createlist").post(authenticateToken,createTodoList )
router.route("/update/:id").put(authenticateToken,updateTodoList )
router.route("/delete/:id").delete(authenticateToken,deleteTodoList )
router.route("/getList").get(authenticateToken,getTodoList ) 



export default router

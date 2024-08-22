import express, { urlencoded } from "express"
import cors from "cors"
// import cookieParser from "cookie-parser"


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
  
}))
app.use(express.static("public"))
// app.use(cookieParser())


//router
 import authRoutes from  "./src/router/auth.router.js"
 import activityRoutes from "./src/router/todoActivity.router.js"

 app.use("/api/auth",authRoutes )
 app.use("/api/activity",activityRoutes )


export default app
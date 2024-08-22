import express from "express"
import {registrationUser,loginUser} from  "../controller/auth.controller.js"

const router = express.Router()

router.route("/signup").post(registrationUser )
router.route("/login").post(loginUser )



export default router

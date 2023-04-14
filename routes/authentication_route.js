import express from 'express'
import authentication_controller from '../controller/authentication_controller.js'

const auth_route = express.Router()


auth_route.get('/authCheck',authentication_controller)
auth_route.get('/login',(req,res)=>{
    res.render('login/login')
})


export default auth_route
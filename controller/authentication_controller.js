export default function authentication_controller(req,res,next){
    // check if this user already has session
    const serviceUrl = `${req.protocol}://${req.headers.host}`
    if (req.session === undefined){
        return  res.redirect(`http://localhost:3000/login?serviceUrl=${serviceUrl}`)
        }

    next()
}
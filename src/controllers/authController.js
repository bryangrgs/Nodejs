const authControllers={
    login_get: (req,res)=> res.send('Route for admin  login get'),
    login_post: (req,res)=> res.send('Route for admin login post'),
    register_get: (req,res)=> res.send('Route for admin register get'),
    register_post: (req,res)=> res.send('Route for admin register post'),
    
}
module.exports= authControllers;
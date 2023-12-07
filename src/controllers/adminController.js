const adminControllers={
    admin_get: (req,res)=> res.send('Route for admin'),
    admin_create: (req,res)=> res.send('Route for admin create'),
    admin_post: (req,res)=> res.send('Route for admin  post'),
    admin_edit: (req,res)=> res.send('Route for admin edit'),
    edit_put: (req,res)=> res.send('Route for admin edit put'),
    admin_delete: (req,res)=> res.send('Route for admin delete'),
    
}
module.exports= adminControllers;
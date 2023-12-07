const shopControllers={
    shop: (req,res)=> res.send('Route for shop'),
    item_id: (req,res)=> res.send(`Route for find and retrieve a product from the id: ${req.params.id} `),
    item_id_add: (req,res)=> res.send('Route for find the current item to the shop cart'),
    cart_get: (req,res)=> res.send('Route for cart view'),
    cart_post: (req,res)=> res.send('Route for go to checkout page '),
}
module.exports= shopControllers;
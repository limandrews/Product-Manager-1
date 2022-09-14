const ProductController = require('../controllers/product.controller');
//listening for the route 
module.exports = function (app) {
    //this executes the index function in the controller.
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getProduct); 
}
import express from 'express'; 
import dotenv from 'dotenv'; 
import cors from 'cors'; 
import { check, checkSchema } from 'express-validator';
import configureDB from './config/db.js';

import usersCltr from './app/controllers/users-cltr.js';
import categoriesCltr from './app/controllers/categories-cltr.js';
import productsCltr from './app/controllers/products-cltr.js';
import enquiresCltr from './app/controllers/enquires-cltr.js';

import authenticateUser from './app/middlewares/authenticate.js';
import authorizeUser from './app/middlewares/authorize.js';
import checkAccountStatus from './app/middlewares/checkStatus.js';

import { userRegisterSchema, userLoginSchema } from './app/validators/user-validation-schema.js';
import categoryValidationSchema from './app/validators/category-validation-schema.js'; 
import idValidationSchema from './app/validators/id-schema-validation.js';
import productValidationSchema from './app/validators/product-validation-schema.js';
import enquiryValidationSchema from './app/validators/enquiry-validation-schema.js'; 

const app = express(); 
dotenv.config(); 
configureDB(); 

// application level middleware
app.use(function(req, res, next){
    console.log(`${new Date()} - ${req.method} - ${req.ip} - ${req.url}`);
    next();
});


// express.json() - inbuilt middleware 
app.use(express.json()); // application + inbuilt 
// cors - 3rd party middleware 
app.use(cors()); // application + 3 party 

// checkSchema - routing level middleware 
app.post('/api/users/register', checkSchema(userRegisterSchema), usersCltr.register); 
app.post('/api/users/login', checkSchema(userLoginSchema),usersCltr.login);
app.get('/api/users/account', authenticateUser, usersCltr.account); 
app.get('/api/users',authenticateUser, authorizeUser(['admin']), usersCltr.list)
app.put('/api/users/:id/status', authenticateUser, authorizeUser(['admin']), usersCltr.userActivation); 

app.get('/api/categories', categoriesCltr.list)
app.get('/api/categories/:id', checkSchema(idValidationSchema), categoriesCltr.show)
app.post('/api/categories', authenticateUser, authorizeUser(['admin']), checkSchema(categoryValidationSchema), categoriesCltr.create )
app.put('/api/categories/:id', authenticateUser, authorizeUser(['admin']),checkSchema(categoryValidationSchema), checkSchema(idValidationSchema), categoriesCltr.update)
app.delete('/api/categories/:id', authenticateUser, authorizeUser(['admin']),checkSchema(idValidationSchema), categoriesCltr.remove )


app.post('/api/products', authenticateUser, authorizeUser(['seller']), checkSchema(productValidationSchema), productsCltr.create); 
// list all products - public - return only verified products
app.get('/api/products', productsCltr.list); 

// list my products - return oly the products added by a specific seller
app.get('/api/products/my', authenticateUser, authorizeUser(['seller']), productsCltr.myProducts); 

// show a product - public
app.get('/api/products/:id', checkSchema(idValidationSchema),productsCltr.show); 

// update a product by the seller / admin
app.put('/api/products/:id', authenticateUser, authorizeUser(['admin', 'seller']),checkSchema(productValidationSchema),  productsCltr.update)

// delete a product by the seller / admin
app.delete('/api/products/:id', authenticateUser, authorizeUser(['admin', 'seller']), checkSchema(idValidationSchema), productsCltr.remove); 

// verify a product by the admin
app.put('/api/products/verify/:id', authenticateUser, authorizeUser(['admin']), productsCltr.verify);

// buyer, create enquiry
app.post('/api/enquries', authenticateUser,checkAccountStatus, authorizeUser(['buyer']), checkSchema(enquiryValidationSchema), enquiresCltr.create);

// list all enquiries
app.get('/api/enquries/my', authenticateUser, authorizeUser(['buyer']), enquiresCltr.myEnquries);

// track an enquiry - show 
app.get('/api/enquries/:id', authenticateUser, authorizeUser(['buyer']), checkSchema(idValidationSchema), enquiresCltr.show); 

// delete an enquiry
// edit an enquriy - before a response 

// seller, get all enquires for a product
app.get('/api/products/:id/enquries', authenticateUser, authorizeUser(['admin', 'seller']), checkSchema(idValidationSchema), enquiresCltr.productEnquries )

// app.get('/api/products/:id/reviews' ) 

// api to get all the students of a batch 
// .get('/api/batch/:id/students')

// api to get all the batches for a course 
// .get('/api/courses/:id/batches)

// course / batch / studnets
// .get('/api/courses/:id/batches/:batchId/students)

// response to the enquiry
// update the status of an enquiry




// seller, get all the enquires for all the products

app.listen(process.env.PORT, () => {
    console.log('server running on port', process.env.PORT)
})

/*

{ user.role == 'admin' && <Link to="/category/new">Add Category</Link> }
<Route path="/category/new" element={ <PrivateRoute permittedRoles=["admin"]> <CategoryForm/> </PrivateRoute/>} />

*/ 
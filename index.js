const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const signinRoute = require('./routes/signin/signin.route');
const getProducts = require('./routes/index.route');
const productDetails = require('./routes/productDetails/productDetail.route');
const cart = require('./routes/cart/cart.route');
const register = require('./routes/register/register.route');
const products = require('./routes/products/product.route');
const contact = require('./routes/contact/contact.route');
const user = require('./routes/user/user.route');

const adminSignin = require('./routes/admin/adminSignin/adminSignin.route');
const adminProduct = require('./routes/admin/adminProducts/adminProducts.route');
const adminUser = require('./routes/admin/adminUsers/adminUsers.route');
const adminOrder = require('./routes/admin/adminOrders/adminOrders.route');
const adminCarousel = require('./routes/admin/adminCarousels/adminCarousels.route');
// Middleware
const middleware = require('./middlewares/session.middleware');
const middle = require('./middlewares/auth.middleware');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser('chuoibatky'));
app.use(middleware.session);
app.use(middleware.cartItems);

// app.use('/signin', middleware.cartItems, signinRoute);
// app.use('/', middleware.cartItems, getProducts);
// app.use('/product-details', middleware.cartItems, productDetails);
// app.use('/cart', middleware.cartItems, cart)
// app.use('/register', middleware.cartItems, register);
// app.use('/products', middleware.cartItems, products);
// app.use('/contact', middleware.cartItems, contact);
// app.use('/user', middleware.cartItems, user); 

app.use('/signin', signinRoute);
app.use('/', getProducts);
app.use('/product-details', productDetails);
app.use('/cart', cart)
app.use('/register', register);
app.use('/products', products);
app.use('/contact', contact);
app.use('/user', user);

app.use('/admin/signin', adminSignin);
app.use('/admin/products',middle.adminAuth, middleware.numberOfOrders, adminProduct);
app.use('/admin/users', middle.adminAuth, middleware.numberOfOrders,adminUser);
app.use('/admin/orders', middle.adminAuth, middleware.numberOfOrders, adminOrder);
app.use('/admin/carousels', middle.adminAuth, middleware.numberOfOrders, adminCarousel);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
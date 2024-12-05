const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const productRoutes = require('./routes/ProductRoutes');
require('dotenv').config();

const app = express();

// 设置视图引擎为 EJS
app.set('view engine', 'ejs');

// 连接 MongoDB
connectDB();

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 根路由：渲染产品列表页面
app.get('/', async (req, res) => {
    try {
        const Product = require('./models/ProductModel');
        const products = await Product.find();
        res.render('index', { products });
    } catch (error) {
        res.status(500).send('Error loading products');
    }
});

// 注册 API 路由
app.use('/api/products', productRoutes);

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
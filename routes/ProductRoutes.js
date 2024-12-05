const express = require('express');
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/ProductController');

const router = express.Router();

// 获取所有产品
router.get('/', getAllProducts);

// 创建新产品
router.post('/', createProduct);

// 更新产品
router.put('/:id', updateProduct);

// 删除产品
router.delete('/:id', deleteProduct);

module.exports = router;
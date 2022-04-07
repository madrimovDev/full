"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nanoid_1 = require("nanoid");
const product_controller_1 = require("../controllers/product.controller");
const root = (0, express_1.Router)();
root.get('/upload', (req, res) => {
    let data = (0, product_controller_1.findAllProduct)();
    res.send(data);
    console.log(true);
});
root.get('/upload/:id', (req, res) => {
    let { id } = req.params;
    let data = (0, product_controller_1.findProduct)(id);
    res.send(data);
});
root.delete('/upload/delete/:id', (req, res) => {
    let { id } = req.params;
    (0, product_controller_1.deleteProduct)(id);
    res.send(200).sendStatus(200);
});
root.delete('/upload/delete', (req, res) => {
    (0, product_controller_1.deleteAllProducts)();
    res.status(200);
});
root.post('/upload', (req, res) => {
    var _a;
    const { title, desc, price, category } = req.body;
    const img = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    const newProduct = {
        id: (0, nanoid_1.nanoid)(),
        category,
        desc,
        price,
        title,
        img: img ? img : ''
    };
    (0, product_controller_1.addProduct)(newProduct);
    res.sendStatus(200);
});
exports.default = root;

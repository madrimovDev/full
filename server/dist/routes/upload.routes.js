"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const root = (0, express_1.Router)();
root.get('/upload', (req, res) => {
    res.send((0, product_controller_1.findAllProduct)());
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
root.post('/upload', (req, res) => {
    const { title, desc, price, category, img } = req.body;
    // const img = req.file?.path
    // const newProduct: Product = {
    //   id: nanoid(),
    //   category,
    //   desc,
    //   price,
    //   title,
    //   img
    // }
    // addProduct(newProduct)
    console.log(img);
    res.sendStatus(200);
});
exports.default = root;

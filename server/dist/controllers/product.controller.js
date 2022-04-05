"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.findAllProduct = exports.findProduct = exports.addProduct = void 0;
const node_json_db_1 = require("node-json-db");
const JsonDBConfig_1 = require("node-json-db/dist/lib/JsonDBConfig");
const db = new node_json_db_1.JsonDB(new JsonDBConfig_1.Config("database/myDataBase", true, false, '/'));
const addProduct = (product) => {
    db.push('/data[]', product);
};
exports.addProduct = addProduct;
const findProduct = (id) => {
    let datas = db.getData('/data');
    let idx = db.getIndex('/data', id);
    return datas[idx];
};
exports.findProduct = findProduct;
const findAllProduct = () => {
    return db.getData('/data');
};
exports.findAllProduct = findAllProduct;
const deleteProduct = (id) => {
    let idx = db.getIndex('/data', id);
    db.delete(`/data[${idx}]`);
};
exports.deleteProduct = deleteProduct;

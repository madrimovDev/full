import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
const db = new JsonDB(new Config("database/myDataBase", true, false, '/'));

interface Product {
  id: string
  title: string,
  desc: string
  price: string
  category: string
  img: string
}

const addProduct = (product: Product) => {
  db.push('/data[]', product)
}

const findProduct = (id: string) => {
  let datas = db.getData('/data')
  let idx = db.getIndex('/data', id)
  return datas[idx]
}

const findAllProduct = () => {
  return db.getData('/data')
}

const deleteProduct = (id: string) => {
  let idx = db.getIndex('/data', id)
  db.delete(`/data[${idx}]`)
}

const deleteAllProducts = () => {
  db.delete('/data')
}

export {
  addProduct, Product, findProduct, findAllProduct, deleteProduct, deleteAllProducts
}
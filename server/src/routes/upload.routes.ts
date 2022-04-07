import { Router } from "express";
import { nanoid } from "nanoid";
import { addProduct, deleteAllProducts, deleteProduct, findAllProduct, findProduct, Product } from "../controllers/product.controller";


const root = Router()

root.get('/upload', (req, res) => {
  let data = findAllProduct()
  res.send(data)
  console.log(true);
})

root.get('/upload/:id', (req, res) => {
  let { id } = req.params
  let data = findProduct(id)
  res.send(data)
})

root.delete('/upload/delete/:id', (req, res) => {
  let { id } = req.params
  deleteProduct(id)
  res.send(200).sendStatus(200)
})

root.delete('/upload/delete', (req, res) => {
  deleteAllProducts()
  res.status(200)
})

root.post('/upload', (req, res) => {
  const { title, desc, price, category } = req.body

  const img = req.file?.filename
  const newProduct: Product = {
    id: nanoid(),
    category,
    desc,
    price,
    title,
    img: img ? img : ''
  }
  addProduct(newProduct)
  res.sendStatus(200)
})

export default root
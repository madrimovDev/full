import { Router } from "express";
import { Multer } from "multer";
import { nanoid } from "nanoid";
import { addProduct, deleteProduct, findAllProduct, findProduct, Product } from "../controllers/product.controller";


const root = Router()

root.get('/upload', (req, res) => {
  res.send(findAllProduct())
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


root.post('/upload', (req, res) => {
  const { title, desc, price, category, img } = req.body
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

  res.sendStatus(200)
})

export default root
import React, { FormEvent, HTMLInputTypeAttribute, useState } from "react";
import { useDispatch } from "react-redux";
import { productAction } from "../../redux/product/productAction";

export const AddProduct = () => {
  const [title, setTitle] = useState<HTMLInputTypeAttribute>();
  const [price, setPrice] = useState<HTMLInputTypeAttribute>();
  const [category, setCategory] = useState<HTMLInputTypeAttribute>();
  const [img, setImg] = useState<HTMLInputTypeAttribute>();
  const [desc, setDesc] = useState<HTMLInputTypeAttribute>();

  const dispatch = useDispatch()

  const submitHandler = (event: FormDataEvent) => {
    event.preventDefault()
    console.log(event);
    
    const newProduct = {
      title, price, category, img, desc
    }
    dispatch(productAction(newProduct))
  }

  return (
    <>
      <h1 className="text-6xl m-10 mb-5">Prdouct info</h1>
      <form encType="multipart/form-data" onSubmit={(event: FormEvent) => submitHandler(event)} className="w-3/4 mx-auto p-5 flex flex-col gap-5">
        <div className="form-control">
          <label className="label text-xl">Product Name</label>
          <label className="input-group">
            <span className="w-20">Name</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              name="title"
              type="text"
              placeholder="Shoe"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label text-xl">Product Price</label>
          <label className="input-group">
            <span className="w-20">Price</span>
            <input
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              name="price"
              type="number"
              placeholder="100"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label text-xl">Product Category</label>
          <select
            name="category"
            className="select w-full select-bordered"
            value={category}
            defaultValue={"default"}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option disabled value={"default"}>
              Pick your favorite Simpson
            </option>
            <option value={"Homer"}>Homer</option>
            <option value={"Marge"}>Marge</option>
            <option value={"Bart"}>Bart</option>
            <option value={"Lisa"}>Lisa</option>
            <option value={"Maggie"}>Maggie</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label text-xl">Product Photo</label>
          <label htmlFor="file" className="custom-file">
            <span className="text-lg">Select File: {img}</span>
            <input
              name="file"
              id="file"
              type="file"
              value={img}
              onChange={(event) => setImg(event.target.value)}
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label text-xl">Product Description</label>
          <textarea
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
            className="textarea textarea-bordered textarea"
          ></textarea>
        </div>
        <button className="btn btn-primary btn-lg" type="submit">
          Add Product
        </button>
      </form>
    </>
  );
};

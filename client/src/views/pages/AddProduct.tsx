import React, { ChangeEvent, FormEvent, HTMLInputTypeAttribute,  useState } from "react";
import { useDispatch } from "react-redux";
import { productAction } from "../../redux/product/productAction";

export const AddProduct = () => {
  const [title, setTitle] = useState<HTMLInputTypeAttribute>();
  const [price, setPrice] = useState<HTMLInputTypeAttribute>();
  const [category, setCategory] = useState<HTMLInputTypeAttribute>();
  const [img, setImg] = useState<any>();
  const [desc, setDesc] = useState<HTMLInputTypeAttribute>();

  const dispatch = useDispatch()


  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(!title?.trim() || !price?.trim() || !category?.trim() || !desc?.trim() || !img) return

    let formdata = new FormData();
    formdata.append("title", title!);
    formdata.append("price", price!);
    formdata.append("desc", desc!);
    formdata.append("category", category!);
    formdata.append("file", img ? img : "")

    dispatch(productAction(formdata))

    setTitle('')
    setPrice('')
    setImg(null)
    setCategory('')
    setDesc('')
  }

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files ? event.currentTarget.files[0] : event.currentTarget.files
    setImg(file)
  }

  return (
    <>
      <h1 className="text-6xl m-10 mb-5">Prdouct info</h1>
      <form onSubmit={(event) => submitHandler(event)} className="w-3/4 mx-auto p-5 flex flex-col gap-5">
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
            <span className="text-lg"><span className="btn btn-primary w-24 btn-sm">File</span> {img?.name}</span>
            <input
              name="file"
              id="file"
              type="file"
              onChange={(event) => handleFileSelect(event)}
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

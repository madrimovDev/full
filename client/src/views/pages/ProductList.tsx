import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAction } from "../../redux/fetchProduct/fetchAction";
import { useTypedSelector } from "../../redux/store";
import { Product } from "../components/product/Product";

export const ProductList = () => {
  const data = useTypedSelector((state) => state.fetch);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(fetchAction())
  }, [])

  const btn = () => {
    disptach(fetchAction());
  };
  return (
    <>
      <div className="flex items-center justify-between m-10">
        <h1 className="text-6xl leading-none">Prdouct List</h1>
        <button onClick={btn} className="btn btn-primary">
          Fetch Product
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{data.data ? <Product data={data.data}/> : ""}</tbody>
        </table>
      </div>
    </>
  );
};

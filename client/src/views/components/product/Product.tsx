import React from "react";
import { Data } from "../../../redux/fetchProduct/fetchReducer";
export const Product = ({ data }: { data: Data[] }) => {
  return (
    <>
      {data.map((item, idx) => {
        return (
          <tr key={idx}>
            <th>{idx + 1}</th>
            <td><img className="w-14 aspect-video object-cover" src={`http://localhost:5555/${item.img}`} alt="" /></td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>{item.desc}</td>
          </tr>
        );
      })}
    </>
  );
};

import axios from "axios";
import { Dispatch } from "redux";
import { ProductAction, ProductTypes } from "./productReducer";

const _productAction = (type: ProductTypes): ProductAction => {
  return {
    type: type
  }
}


export const productAction = (data: any) => {
  return (dispatch: Dispatch) => {
    console.log(true);

    dispatch(_productAction(ProductTypes.loading))
    axios.post("http://localhost:5555/api/upload", data
    )
      .then(() => dispatch(_productAction(ProductTypes.Success)))
      .then(() => dispatch(_productAction(ProductTypes.Error)))
  }
}
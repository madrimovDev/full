import axios from "axios"
import { Dispatch } from "redux"
import { Data, FetchAction, FetchTypes } from "./fetchReducer"

const _fetchAction = (type: FetchTypes, data?: Data[]): FetchAction => {
  if (!data) {
    return {
      type: type,
    }
  }
  return {
    type: type,
    payload: data
  }
}


export const fetchAction = () => {
  return (dispatch: Dispatch) => {
    dispatch(_fetchAction(FetchTypes.loading))
    axios.get('http://localhost:5555/api/upload')
      .then(res => {
        dispatch(_fetchAction(FetchTypes.Success, res.data))        
      }).catch(() => {
        dispatch(_fetchAction(FetchTypes.Error))
      })
  }
}

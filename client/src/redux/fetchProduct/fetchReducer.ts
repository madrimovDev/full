export enum FetchTypes {
  Success, loading, Error
}

export interface Data {
  title: string
  desc: string
  category: string
  price: string
  img: string
}

export interface FetchState {
  loading: boolean
  error: boolean
  success:boolean
  data?: Data[] 
}

export interface FetchAction {
  type: FetchTypes
  payload?: Data[]
}

const initialState: FetchState = {
  error: false, 
  loading: false,
  success:false,
  data: undefined
}

export const fetchReducer = (state = initialState, action: FetchAction): FetchState => {
  switch (action.type) {
    case FetchTypes.Error: return {error: true, loading: false, success: false}
    case FetchTypes.loading: return {error: false, loading: true, success: false}
    case FetchTypes.Success: return {error: false, loading: false, success: true, data: action.payload}
    default: return state  
  }
}
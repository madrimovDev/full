export enum ProductTypes {
  Success, loading, Error
}

export interface ProductState {
  loading: boolean
  error: boolean
  success: boolean
}

export interface ProductAction {
  type: ProductTypes
}

const initialState: ProductState = {
  error: false, loading: false, success: false
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductTypes.loading: return { error: false, loading: true, success: false }  
    case ProductTypes.Error: return { error: true, loading: false, success: false }
    case ProductTypes.Success: return { error: false, loading: false, success: true }
    default: return state
  }  
}
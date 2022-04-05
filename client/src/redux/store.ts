import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

export const store = createStore(rootReducer, {}, applyMiddleware(thunk))

type RootType = ReturnType< typeof rootReducer >

export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector
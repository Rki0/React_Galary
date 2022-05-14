// import { combineReducers } from "redux";
// import carts from "./CartManage";

// const rootReducer = combineReducers({
//   carts,
// });

// export default rootReducer;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartManage";

export default configureStore({
  reducer: {
    carts: cartReducer,
  },
});

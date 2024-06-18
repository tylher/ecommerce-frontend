import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PERSIST,
  FLUSH,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { thunk } from "redux-thunk";
import { authApi } from "../services/api/auth";
import authReducer from "./auth/authSlice";
import resettableReducer from "./ResettableReducer";
import { resetMiddleware } from "./ResetMiddleware";

const encryptRedux = import.meta.env.VITE_ENCRYPT_REDUX;
const production = import.meta.env.PROD;

const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: encryptRedux,
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};

const rootReducer = combineReducers({
  auth: resettableReducer(authReducer, authReducer(undefined, {})),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    encryptedState: persistedReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  devTools: !production,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PURGE, REGISTER, REHYDRATE, PAUSE, PERSIST, FLUSH],
      },
    }).concat(thunk, resetMiddleware, authApi.middleware),
});

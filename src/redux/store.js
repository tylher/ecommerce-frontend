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

const encryptRedux = import.meta.env.VITE_ENCRYPT_REDUX;
const production = import.meta.env.PROD;

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encrypTransform({
      secretKey: encryptRedux,
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};

const rootReducer = combineReducers({});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    encryptedState: persistedReducer,
  },
  devTools: !production,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PURGE, REGISTER, REHYDRATE, PAUSE, PERSIST, FLUSH],
      },
    }).concat(thunk, resetMiddleware),
});

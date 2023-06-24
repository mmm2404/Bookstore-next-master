import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cart from './cartSlice';

// <reference types="redux-persist" />
const persistConfig = {
  key: 'root', 
  storage
}

const rootReducer = combineReducers({ cart })
const persistedReducer = persistReducer(persistConfig, rootReducer)
 const  setupStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
 
export const persistor = persistStore(setupStore());
export default setupStore;



export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']


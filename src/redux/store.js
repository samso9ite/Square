import {configureStore} from '@reduxjs/toolkit'
import generalReducer from './GeneralSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './reducers'


const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, generalReducer)

export const store = configureStore({
    // reducer: {
    //     general: generalReducer,
    // },
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)
import { configureStore } from "@reduxjs/toolkit";
import {cryptoApi} from '../services/cryptoApi';
import { cryptoNewsApi } from "../services/cryptoNewsApi";

const reducer = {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
}
const store = configureStore({
    reducer,

})
export default store;

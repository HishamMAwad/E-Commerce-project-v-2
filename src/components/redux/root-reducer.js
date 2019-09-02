import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import collectionReducer from './collection/collection.reducer';



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};



export const rootReducer = combineReducers({
    cart: cartReducer,
    directory: directoryReducer,
    collection: collectionReducer,
});


export default persistReducer(persistConfig, rootReducer);

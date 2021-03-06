import { compose, applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import getStoreListReducer from "./reducers/getStoreListReducer";
// import storage from "redux-persist/lib/storage";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import signReducer from "./reducers/signReducer";
import userReducer from "./reducers/userReducer";

const persistConfig = {
  key: "root",
  storage: storage
};

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const rootReducer = combineReducers({
  getStoreList: getStoreListReducer,
  signReducer : signReducer,
  userReducer : userReducer
})



export type AppState = ReturnType<typeof rootReducer>


export default function configureStore() {
  const enhancer = compose(applyMiddleware(...middlewares));
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
}



import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";

const configStore = (loadingStore={}) => {
    const store = createStore(
        rootReducer,
        loadingStore,
        composeWithDevTools(applyMiddleware(logger))
    )
    return {store};
}

export default configStore;

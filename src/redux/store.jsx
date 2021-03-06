import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const configStore = (loadingStore={}) => {
    const store = createStore(
        rootReducer,
        loadingStore,
        composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
    )
    sagaMiddleware.run(rootSaga);
    return {store};
}

export default configStore;

import { createStore } from "redux";
import rootReducers from "./component/reduceres";

const store = createStore(rootReducers);

export default store;
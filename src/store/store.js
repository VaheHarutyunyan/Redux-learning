import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";
import { loadState, saveState } from "./local-storage";

export function cofigureStor() {
  const persistedState = loadState();
  const store = createStore(rootReducer,persistedState, composeWithDevTools());
  //only counter state save in the locale storage
  // store.subscribe(() => {
  //   saveState({
  //     counter: store.getState().counter
  //   })
  // })
  
  //all  store saved in the locale storage
  store.subscribe(() => setTimeout(() => {
    saveState(store.getState())
  }, 1000))
  return store;
}

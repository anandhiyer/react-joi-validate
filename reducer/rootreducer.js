import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
});

export default rootReducer

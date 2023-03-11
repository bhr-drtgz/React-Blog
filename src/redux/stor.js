import { createStore, combineReducers } from "redux";

import blogsReduser from './reducers/blogsReducer';
import categoriesReduser from './reducers/categoriesReducer';
import loginReducer from './reducers/loginReducer';
import usersReduser from './reducers/usersReducer';


const rootReducer = combineReducers({
    blogsState: blogsReduser,
    categoriesState: categoriesReduser,
    loginState: loginReducer,
    usersState: usersReduser
})

const store = createStore(rootReducer)

export default store
import { createStore, combineReducers } from "redux";

import blogReduser from './reducers/blogsReducer';
import categoriesReduser from './reducers/categoriesReducer';
import loginReducer from './reducers/loginReducer';
import usersReduser from './reducers/usersReducer';


const rootReducer = combineReducers({
    blogsState: blogReduser,
    categoriesState: categoriesReduser,
    loginState: loginReducer,
    usersState: usersReduser
})

const store = createStore(rootReducer)

export default store
const actionTypes = {
    blogActions: {
        GET_BLOGS_START: "GET_BLOGS_START",
        GET_BLOGS_SUCCESS: "GET_BLOGS_SUCCESS",
        GET_BLOGS_FAIL: "GET_BLOGS_FAIL"
    },
    categoryActions: {
        GET_CATEGORIES_START: "GET_CATEGORIES_START",
        GET_CATEGORIES_SUCCESS: "GET_CATEGORIES_SUCCESS",
        GET_CATEGORIES_FAIL: "GET_CATEGORIES_FAIL"
    },
    userActions: {
        GET_USERS_START: "GET_USERS_START",
        GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
        GET_USERS_FAIL: "GET_USERS_FAIL",
    },
    loginActions: {
        GET_LOGIN_START: "GET_LOGIN_START",
        GET_LOGIN_SUCCESS: "GET_LOGIN_SUCCESS",
        GET_LOGIN_FAIL: "GET_LOGIN_FAIL",
        LOGOUT: "LOGOUT"
    }
}

export default actionTypes
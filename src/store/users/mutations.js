import router from "@/router";
// import {
//     AUTH_LOGOUT,
//     AUTH_REQUEST,
//     AUTH_USERNAME,
//     INIT_AUTH,
//     SET_LOADING_STATE,
//     SET_USER_DETAIL,
//     AUTH_ERROR,
//     AUTH_SUCCESS,
// } from "@/store/users/mutation-types";


export default {
    // /**
    // *
    // * @param { UsersState } state
    // * @param { string } data
    // */
    // [SET_DATA](state, { data }) {
    //     state.data = data;
    // },
    /**
     *
     * @param { UsersState } state
     * @param { any } token
     */
    AUTH_SUCCESS: (state, {token}) => {

        state.status = 'authenticated';
        state.token = token
        router.push('/')
    },

    AUTH_LOGOUT: (state) => {
        state.token = null;
        state.username = null;
    },
    AUTH_ERROR: (state) => {
        state.status = 'error'
        state.token = null;
    },
    AUTH_REQUEST: (state) => {
        state.status = 'loading'
    },

    /**
     *
     * @param { UsersState } state
     * @param { any } data
     */
    INIT_AUTH: (state, data) => {
        state.token = data.token
        state.username = data.username
    },

    /**
     *
     * @param { UsersState } state
     * @param { string } data
     */

    AUTH_USERNAME: (state, data) => {
        state.username = data;
    },

// [SET_ALL_BLOGS](state, data) {
//     state.blogs = data;
//
// },
    /**
     *
     * @param { UsersState } state
     * @param { any } data
     */
    SET_USER_DETAIL: (state, data) => {
        state.userDetail = data;
    },

    SET_LOADING_STATE: (state, data) => {
        state.isLoading = data;
    },

    TEST: () =>{
        console.log('test success')
    }
};

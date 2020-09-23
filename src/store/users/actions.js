// import { SET_DATA } from './mutation-types';
//
// /**
// *
// * @param { function } commit
// * @param { string } data
// */
// export function setData({ commit }, { data }) {
//     commit(SET_DATA, { data });
// }
import axios from 'axios'

// axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.baseURL = 'https://amazonadsprogrambackend.herokuapp.com/';
// /**
// *
// * @param { function } commit
// * @param { string } token
// */
//
// export function setToken({ commit }, { token }) {
//     commit(AUTH_SUCCESS, { token });
// }

/**
 *
 * @param { function } context
 * @param { string } context
 */
export function inIt(context) {
    const userToken = localStorage.getItem('user-token')
    const userName = localStorage.getItem('username')
    context.commit('INIT_AUTH', {token: userToken, username: userName})
}

/**
 *
 * @param { function } context
 * @param { any } registerData
 */
export function registerUser(context, registerData) {
    axios.post('api/users/register/', registerData).then(res => {
        console.log(res)
        context.dispatch('userLogin', {email: registerData.email, password: registerData.password});
    }).catch(
        err => console.log(err)
    )
}

export function userLogin({commit}, data) {
    axios.post('api/users/token/', data,).then((res) => {
        const token = res.data.token
        // console.log(res.data.username)
        commit('AUTH_SUCCESS', token)
        localStorage.setItem('user-token', token)


        localStorage.setItem('username', res.data.username)

        commit('AUTH_USERNAME', res.data.username)

    }).catch((err) => {
        console.log(err)

        localStorage.removeItem('username')
        localStorage.removeItem('user-token')
        commit('AUTH_ERROR')
    })

}

export function userLogout(context) {

    localStorage.removeItem('user-token')
    localStorage.removeItem('username')
    context.commit('AUTH_LOGOUT')

}

export function getUserDetail(context) {
    const token = localStorage.getItem('user-token')
    axios.post('api/users/user-by-token/',
        {token: token}).then(res => {
        context.commit('SET_USER_DETAIL', res.data)
    }).catch(err => console.log(err))
}


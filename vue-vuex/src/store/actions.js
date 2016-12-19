/**
 * Created by linxin on 2016/12/1.
 */
export const login = function({ commit }, name){
    commit('LOGIN',{ 'username': name});
}
export const loginout = ({ commit }) => commit('LOGINOUT');
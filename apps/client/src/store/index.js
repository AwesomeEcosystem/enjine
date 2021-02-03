import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { Auth, Session } from '@scale/session'

Vue.use(Vuex)

const auth = new Auth({
  host: 'localhost:9090',
  gateway: 'auth'
})

export default new Vuex.Store({
  state: {
    ticket: null,
    session: null,
    user: null
  },
  getters: {
    isAuth: (state) => !!state.user,
    user: (state) => state.user
  },
  mutations: {
    setTicket(state, ticket) {
      state.ticket = ticket;
    },
    setSession(state, session) {
      state.session = session.socket;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    async init({ state, dispatch }) {
      return new Promise(async (resolve, reject) => {
        if (state.ticket) {
          try {
            await dispatch('initSession');
            await dispatch('initUser');
            resolve(true);
          } catch (e) {
            reject(e);
          }
        }
      })
    },
    async login({ commit, dispatch }, credentials) {
      return new Promise(async (resolve, reject) => {
        try {
          const ticket = await auth.login(credentials)
          commit('setTicket', ticket)
          await dispatch('initSession')
          await dispatch('initUser')
          resolve(true)
        } catch (e) {
          reject(e)
        }
      })
    },
    async initSession({ state, commit, dispatch }) {
      return new Promise((resolve, reject) => {
        try {
          const session = new Session({
            host: 'localhost:9090',
            gateway: 'data',
            ticket: state.ticket
          });
          commit('setSession', session);
          resolve(true)
        } catch (e) {
          reject(e);
        }
      })
    },
    async initUser({ state, commit }) {
      return new Promise((resolve, reject) => {
        const users = new Session({
          host: 'localhost:9090',
          gateway: 'user',
          ticket: state.ticket
        })

        users.socket.emit('get', state.ticket.user, (err, res) => {
          if (err) return reject(err);
          commit('setUser', res);
          resolve(res);
        })
      })
    }
  },
  // plugins: [ createPersistedState() ]
})

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
    sessions: null,
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
    addSession(state, { space, session }) {
      state.sessions = {
        ...state.sessions,
        [space]: session.socket
      }
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    async init({ state, commit, dispatch }) {
      return new Promise(async (resolve, reject) => {
        if (localStorage && localStorage.getItem('ticket_token')) {
          try {
            const ticket = {
              token: localStorage.getItem('ticket_token'),
              expiresAt: localStorage.getItem('ticket_expiresAt'),
              ip: localStorage.getItem('ticket_ip'),
              user: localStorage.getItem('ticket_user'),
              _id: localStorage.getItem('ticket__id')
            }
            commit('setTicket', ticket)
            await dispatch('initUser');
            resolve(true);
          } catch (e) {
            reject(e);
          }
        } else {
          resolve(true);
        }
      })
    },
    async login({ commit, dispatch }, credentials) {
      return new Promise(async (resolve, reject) => {
        try {
          const ticket = await auth.login(credentials)
          if (localStorage) {
            localStorage.setItem('ticket_token', ticket.token)
            localStorage.setItem('ticket_expiresAt', ticket.expiresAt)
            localStorage.setItem('ticket_ip', ticket.ip)
            localStorage.setItem('ticket_user', ticket.user)
            localStorage.setItem('ticket__id', ticket._id)
          }
          commit('setTicket', ticket)
          await dispatch('initUser')
          resolve(true)
        } catch (e) {
          reject(e)
        }
      })
    },
    async initSession({ state, commit, dispatch }, space) {
      return new Promise((resolve, reject) => {
        try {
          const session = new Session({
            host: 'localhost:9090',
            gateway: space,
            ticket: state.ticket
          });
          commit('addSession', { space, session });
          resolve(true)
        } catch (e) {
          reject(e);
        }
      })
    },
    async initUser({ state, commit, dispatch }) {
      return new Promise((resolve, reject) => {
        dispatch('initSession', 'user')
        dispatch('initSession', 'data')

        state.sessions.user.emit('get', state.ticket.user, (err, res) => {
          if (err) return reject(err);
          commit('setUser', res);
          resolve(res);
        })
      })
    }
  },
})

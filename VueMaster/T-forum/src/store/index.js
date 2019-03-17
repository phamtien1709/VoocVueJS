import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '../data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2'
  },

  getters: {
    authUser (state) {
      return state.users[state.authId]
    }
  },

  actions: {
    createPost ({ commit, state }, post) {
      const postId = 'decodePost' + Math.random()
      post['.key'] = postId
      post.userId = state.authId
      post.publishedAt = Math.floor(Date.now() / 1000)

      commit('setPost', { post, postId })
      commit('appendPostToThread', { threadId: post.threadId, postId })
      commit('appendPostToUser', { userId: post.userId, postId })
    },

    updateUser (context, user) {
      context.commit('setUser', { user, userId: user['.key'] })
    }
  },

  mutations: {
    setPost (state, { post, postId }) {
      Vue.set(state.posts, postId, post)
    },

    appendPostToThread (state, { threadId, postId }) {
      const thread = state.threads[threadId]
      Vue.set(thread.posts, postId, postId)
    },

    appendPostToUser (state, { postId, userId }) {
      const user = state.users[userId]
      Vue.set(user.posts, postId, postId)
    },

    setUser (state, { user, userId }) {
      Vue.set(state.users, userId, user)
    }
  }
})

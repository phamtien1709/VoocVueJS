import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '../data'
import { countObjectProperties } from '../utils/index'

Vue.use(Vuex)

const makeAppendChildToParentMutation = ({ parent, child }) =>
  (state, { childId, parentId }) => {
    const resource = state[parent][parentId]
    if (!resource[child]) {
      Vue.set(resource, child, {})
    }
    Vue.set(resource[child], childId, childId)
  }

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2'
  },

  getters: {
    authUser (state) {
      return state.users[state.authId]
    },
    userThreadsCount: state => id => countObjectProperties(state.users[id].threads),
    userPostsCount: state => id => countObjectProperties(state.users[id].posts),
    threadRepliesCount: state => id => countObjectProperties(state.threads[id].posts) - 1
  },

  actions: {
    createPost ({ commit, state }, post) {
      return new Promise((resolve, reject) => {
        const postId = 'decodePost' + Math.random()
        post['.key'] = postId
        post.userId = state.authId
        post.publishedAt = Math.floor(Date.now() / 1000)

        commit('setPost', { post, postId })
        commit('appendPostToThread', { parentId: post.threadId, childId: postId })
        commit('appendPostToUser', { parentId: post.userId, childId: postId })
        resolve(state.posts[postId])
      })
    },

    createThread ({ state, commit, dispatch }, { text, title, forumId }) {
      return new Promise((resolve, reject) => {
        const threadId = 'decodeThread' + Math.random()
        const userId = state.authId
        const publishedAt = Math.floor(Date.now() / 1000)
        const thread = { '.key': threadId, publishedAt, title, forumId, userId }

        commit('setThread', { threadId, thread })
        commit('appendThreadToForum', { parentId: forumId, childId: threadId })
        commit('appendThreadToUser', { parentId: userId, childId: threadId })
        dispatch('createPost', { text, threadId }).then(post => {
          commit('setThread', { threadId, thread: { ...thread, firstPostId: post['.key'] } })
        })

        resolve(state.threads[threadId])
      })
    },

    updateUser (context, user) {
      context.commit('setUser', { user, userId: user['.key'] })
    },

    updateThread ({ state, commit, dispatch }, { title, text, id }) {
      return new Promise((resolve, reject) => {
        const thread = state.threads[id]
        const newThread = { ...thread, title }
        commit('setThread', { thread: newThread, threadId: id })
        dispatch('updatePost', { id: thread.firstPostId, text })
          .then(() => {
            resolve(newThread)
          })
        resolve(newThread)
      })
    },
    updatePost ({ state, commit }, { id, text }) {
      return new Promise((resolve, reject) => {
        const post = state.posts[id]
        commit('setPost', {
          postId: id,
          post: {
            ...post,
            text,
            edited: {
              at: Math.floor(Date.now() / 1000),
              by: state.authId
            }
          }
        })
        resolve(post)
      })
    }
  },

  mutations: {
    setPost (state, { post, postId }) {
      Vue.set(state.posts, postId, post)
    },

    appendPostToThread: makeAppendChildToParentMutation({ parent: 'threads', child: 'posts' }),

    appendPostToUser: makeAppendChildToParentMutation({ parent: 'users', child: 'posts' }),

    setUser (state, { user, userId }) {
      Vue.set(state.users, userId, user)
    },

    setThread (state, { thread, threadId }) {
      Vue.set(state.threads, threadId, thread)
    },

    appendThreadToForum: makeAppendChildToParentMutation({ parent: 'forums', child: 'threads' }),

    appendThreadToUser: makeAppendChildToParentMutation({ parent: 'users', child: 'threads' })
  }
})

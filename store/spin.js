export const state = () => ({
  load: false,
})

export const mutations = {
  loading(state, payload) {
    state.load = payload
  },
}

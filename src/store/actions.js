export default {
  addWine: function ({ commit }, payload) {
    commit('appendWine', payload)
  }
}

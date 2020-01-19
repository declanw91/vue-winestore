export default {
  appendWine: function (state, { colour, wine }) {
    state[colour].push(wine)
  }
}

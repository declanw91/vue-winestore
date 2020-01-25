export default {
  appendWine: function (state, { Colour, wine }) {
    const wineList = Colour.toLowerCase() + 'Wines'
    state[wineList].push(wine)
  }
}

import redWines from '../data/red'
import whiteWines from '../data/white'
import roseWines from '../data/rose'
export default {
  redWines,
  whiteWines,
  roseWines,
  wines: [...redWines, ...whiteWines, ...roseWines],
  regions: [
    { name: 'Alsace', image: '../images/Alsace.png' },
    { name: 'Rhone', image: '../images/Rhone.png' },
    { name: 'Bordeaux', image: '../images/Bordeaux.png' },
    { name: 'Burgundy', image: '../images/Burgundy.png' }
  ],
  colours: [
    { name: 'Red' },
    { name: 'White' },
    { name: 'Rose' }
  ],
  cartTotal: 0.00,
  cartCount: 0,
  selectedQuantity: 0,
  selectedId: -1
}

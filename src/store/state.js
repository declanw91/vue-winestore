import redWines from '../data/red'
import whiteWines from '../data/white'
import roseWines from '../data/rose'
export default {
  redWines,
  whiteWines,
  roseWines,
  wines: [...redWines, ...whiteWines, ...roseWines]
}

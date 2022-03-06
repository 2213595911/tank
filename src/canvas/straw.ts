import config from '../config'
import CanvasAbstract from './canvas'

class Straw extends CanvasAbstract {
  render(): void {
    super.drawModel(config.straw.num)
  }
}

export default new Straw()

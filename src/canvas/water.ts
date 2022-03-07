import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/water'

class Water extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.water.num, Model)
  }
  render(): void {
    super.renderModels()
  }
}

export default new Water()

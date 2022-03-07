import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/straw'

class Straw extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.straw.num, Model)
  }
  render(): void {
    super.renderModels()
  }
}

export default new Straw()

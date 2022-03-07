import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/steel'

class Steel extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.steel.num, Model)
  }
  render(): void {
    super.renderModels()
  }
}

export default new Steel()

import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/wall'

class Wall extends CanvasAbstract {
  constructor() {
    super()
    super.createModels(config.wall.num, Model)
  }
  render(): void {
    super.renderModels()
  }
}

export default new Wall()

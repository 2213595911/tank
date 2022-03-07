import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/water'

class Water extends CanvasAbstract {
  num: number = config.water.num
  Model: IModelConstructor = Model

  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Water()

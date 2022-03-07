import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/straw'

class Straw extends CanvasAbstract implements IModel {
  num: number = config.straw.num
  Model: IModelConstructor = Model
  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Straw()

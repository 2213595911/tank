import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/wall'

class Wall extends CanvasAbstract implements IModel {
  num: number = config.wall.num
  Model: IModelConstructor = Model

  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Wall()

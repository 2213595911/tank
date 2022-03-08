import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/wall'
import {ICanvas, IModelConstructor} from "../vite-env";

class Wall extends CanvasAbstract implements ICanvas {
  num: number = config.wall.num
  Model: IModelConstructor = Model

  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Wall('wall')

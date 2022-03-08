import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/straw'
import {IModelConstructor} from "../vite-env";

class Straw extends CanvasAbstract {
  num: number = config.straw.num
  Model: IModelConstructor = Model

  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Straw('straw')

import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/steel'
import {IModelConstructor} from '../vite-env'

class Steel extends CanvasAbstract {
  num: number = config.steel.num
  Model: IModelConstructor = Model

  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Steel('steel')

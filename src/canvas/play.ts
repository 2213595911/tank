import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/play'
import {IModelConstructor} from "../vite-env";

class Play extends CanvasAbstract {
  num: number = config.play.num
  Model: IModelConstructor = Model

  render(): void {
    this.createModels()
    super.renderModels()
  }

  // 创建模型
  protected createModels() {
    const cw = config.canvas.width
    const ch = config.canvas.height
    const mw = config.model.width
    const mh = config.model.height
    ;[{x: cw / 2 + mw * 8, y: ch - mh}].forEach(position => {
      const instance = new (this.Model as IModelConstructor)(position.x, position.y)
      this.models.push(instance)
    })
  }

}

export default new Play('play')

import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/boss'
import {IModelConstructor} from "../vite-env";

class Boss extends CanvasAbstract {
  num: number = config.boss.num
  Model: IModelConstructor = Model

  render(): void {
    this.createModels()
    super.renderModels()
  }

  // 创建模型
  protected createModels() {
    ;[{x: config.canvas.width / 2, y: config.canvas.height - config.model.height}].forEach(position => {
      const instance = new (this.Model as IModelConstructor)(position.x, position.y)
      this.models.push(instance)
    })
  }
}

export default new Boss('boss')

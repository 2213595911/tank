import config from '../config'
import CanvasAbstract from './canvas'
import Model from '../model/tank'
import position from '../service/position'

class Tank extends CanvasAbstract implements IModel {
  num: number = config.tank.num
  Model: IModelConstructor = Model

  render(): void {
    this.createModels()
    super.renderModels()
  }

  createModels(): void {
    for (let i = 0; i < this.num; i++) {
      const pos = position.position()
      const instance = new this.Model(this.canvas, pos.x, 0)
      this.models.push(instance)
    }
  }
}

export default new Tank()
